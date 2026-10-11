package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

const (
	defaultPort             = "8080"
	requestBodyLimit int64  = 16 * 1024
	trackingTimeout       = 5 * time.Second
	maxNameLength          = 120
	maxPhoneLength         = 40
	maxEmailLength         = 120
	maxMessageLength       = 2000
	maxPathLength          = 500
	maxDeviceFieldLength   = 120
	maxReferrerLength      = 500
)

// IPInfo represents the response from ip-api.com.
type IPInfo struct {
	Status      string  `json:"status"`
	Message     string  `json:"message"`
	Country     string  `json:"country"`
	CountryCode string  `json:"countryCode"`
	Region      string  `json:"regionName"`
	City        string  `json:"city"`
	Zip         string  `json:"zip"`
	Lat         float64 `json:"lat"`
	Lon         float64 `json:"lon"`
	ISP         string  `json:"isp"`
	Org         string  `json:"org"`
	AS          string  `json:"as"`
}

type SiteAccessRequest struct {
	Device      string `json:"device"`
	CurrentPage string `json:"currentPage"`
	Referrer    string `json:"referrer"`
	IP          string `json:"ip"`
	Location    string `json:"location"`
}

type ContactFormRequest struct {
	Name        string `json:"name"`
	Phone       string `json:"phone"`
	Email       string `json:"email"`
	Message     string `json:"message"`
	Timestamp   string `json:"timestamp"`
	Device      string `json:"device"`
	Browser     string `json:"browser"`
	CurrentPage string `json:"currentPage"`
}

type WebhookResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

type appConfig struct {
	bot            *tgbotapi.BotAPI
	chatID         int64
	locationClient  *http.Client
	allowedOrigins  map[string]struct{}
}

func main() {
	port := strings.TrimSpace(os.Getenv("PORT"))
	if port == "" {
		port = defaultPort
	}

	botToken := strings.TrimSpace(os.Getenv("TELEGRAM_BOT_TOKEN"))
	if botToken == "" {
		log.Fatal("TELEGRAM_BOT_TOKEN environment variable is required")
	}

	chatIDRaw := strings.TrimSpace(os.Getenv("TELEGRAM_CHAT_ID"))
	if chatIDRaw == "" {
		log.Fatal("TELEGRAM_CHAT_ID environment variable is required")
	}

	chatID, err := strconv.ParseInt(chatIDRaw, 10, 64)
	if err != nil {
		log.Fatalf("TELEGRAM_CHAT_ID is invalid: %v", err)
	}

	bot, err := tgbotapi.NewBotAPI(botToken)
	if err != nil {
		log.Fatalf("Failed to initialize Telegram bot: %v", err)
	}

	cfg := &appConfig{
		bot:           bot,
		chatID:        chatID,
		locationClient: &http.Client{Timeout: 4 * time.Second},
		allowedOrigins: buildAllowedOrigins(),
	}

	http.HandleFunc("/webhooks/site-access", cfg.handleSiteAccess)
	http.HandleFunc("/webhooks/contact-message", cfg.handleContactMessage)

	server := &http.Server{
		Addr:              ":" + port,
		Handler:           http.DefaultServeMux,
		ReadHeaderTimeout: 10 * time.Second,
	}

	log.Printf("Server starting on :%s", port)
	if err := server.ListenAndServe(); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func buildAllowedOrigins() map[string]struct{} {
	origins := map[string]struct{}{
		"http://localhost:3000":      {},
		"http://localhost:8080":      {},
		"https://localhost:3000":     {},
		"https://localhost:4173":     {},
		"https://victoraurelio.com":  {},
		"https://www.victoraurelio.com": {},
	}

	if configured := strings.TrimSpace(os.Getenv("ALLOWED_ORIGINS")); configured != "" {
		parts := strings.Split(configured, ",")
		for _, part := range parts {
			origin := strings.TrimSpace(part)
			if origin != "" {
				origins[origin] = struct{}{}
			}
		}
	}

	return origins
}

func (app *appConfig) setCORSHeaders(w http.ResponseWriter, r *http.Request) bool {
	origin := strings.TrimSpace(r.Header.Get("Origin"))
	if _, ok := app.allowedOrigins[origin]; !ok {
		if origin == "" {
			return true
		}
		return false
	}

	w.Header().Set("Access-Control-Allow-Origin", origin)
	w.Header().Set("Vary", "Origin")
	w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Max-Age", "86400")
	w.Header().Set("Access-Control-Allow-Credentials", "true")

	return true
}

func (app *appConfig) withMethodValidation(w http.ResponseWriter, r *http.Request) bool {
	origin := strings.TrimSpace(r.Header.Get("Origin"))
	if origin != "" && !app.setCORSHeaders(w, r) {
		w.WriteHeader(http.StatusForbidden)
		return false
	}

	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusNoContent)
		return false
	}

	contentType := strings.ToLower(strings.TrimSpace(r.Header.Get("Content-Type")))
	if contentType != "" && !strings.HasPrefix(contentType, "application/json") {
		w.WriteHeader(http.StatusUnsupportedMediaType)
		return false
	}

	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return false
	}

	return true
}

func (app *appConfig) handleSiteAccess(w http.ResponseWriter, r *http.Request) {
	if !app.withMethodValidation(w, r) {
		return
	}

	var req SiteAccessRequest
	if err := decodeJSONBody(w, r, &req); err != nil {
		log.Printf("Invalid site access body: %v", err)
		writeJSON(w, http.StatusBadRequest, WebhookResponse{Success: false, Message: "Invalid request body"})
		return
	}
	req = SiteAccessRequest{
		Device:      sanitizeString(req.Device, maxDeviceFieldLength),
		CurrentPage: sanitizeString(req.CurrentPage, maxPathLength),
		Referrer:    sanitizeString(req.Referrer, maxReferrerLength),
		IP:          sanitizeString(req.IP, maxDeviceFieldLength),
		Location:    sanitizeString(req.Location, maxReferrerLength),
	}

	if req.IP == "" {
		req.IP = getIP(r)
	}

	location, err := app.getLocation(req.IP)
	if err != nil {
		log.Printf("Error getting location: %v", err)
		location = "Não disponível"
	}
	req.Location = location

	message := app.buildSiteAccessMessage(req)
	if err := app.sendTelegramMessage(message); err != nil {
		log.Printf("Failed to send Telegram notification: %v", err)
		writeJSON(w, http.StatusInternalServerError, WebhookResponse{Success: false, Message: "Failed to send notification"})
		return
	}

	writeJSON(w, http.StatusOK, WebhookResponse{Success: true, Message: "Notificação enviada com sucesso!"})
}

func (app *appConfig) handleContactMessage(w http.ResponseWriter, r *http.Request) {
	if !app.withMethodValidation(w, r) {
		return
	}

	var req ContactFormRequest
	if err := decodeJSONBody(w, r, &req); err != nil {
		log.Printf("Invalid contact body: %v", err)
		writeJSON(w, http.StatusBadRequest, WebhookResponse{Success: false, Message: "Invalid request body"})
		return
	}

	req = ContactFormRequest{
		Name:        sanitizeString(req.Name, maxNameLength),
		Phone:       sanitizeString(req.Phone, maxPhoneLength),
		Email:       sanitizeString(req.Email, maxEmailLength),
		Message:     sanitizeString(req.Message, maxMessageLength),
		Timestamp:   sanitizeString(req.Timestamp, 80),
		Device:      sanitizeString(req.Device, maxDeviceFieldLength),
		Browser:     sanitizeString(req.Browser, maxDeviceFieldLength),
		CurrentPage: sanitizeString(req.CurrentPage, maxPathLength),
	}

	if req.Name == "" || req.Message == "" || req.Email == "" || req.Phone == "" {
		writeJSON(w, http.StatusBadRequest, WebhookResponse{Success: false, Message: "Missing required fields"})
		return
	}

	if len(req.Name) > maxNameLength || len(req.Phone) > maxPhoneLength || len(req.Email) > maxEmailLength || len(req.Message) > maxMessageLength {
		writeJSON(w, http.StatusBadRequest, WebhookResponse{Success: false, Message: "Invalid field length"})
		return
	}

	if !strings.Contains(req.Email, "@") {
		writeJSON(w, http.StatusBadRequest, WebhookResponse{Success: false, Message: "Invalid email"})
		return
	}

	message := app.buildContactMessage(req)
	if err := app.sendTelegramMessage(message); err != nil {
		log.Printf("Failed to send Telegram notification: %v", err)
		writeJSON(w, http.StatusInternalServerError, WebhookResponse{Success: false, Message: "Failed to send notification"})
		return
	}

	writeJSON(w, http.StatusOK, WebhookResponse{Success: true, Message: "Mensagem recebida com sucesso!"})
}

func decodeJSONBody(w http.ResponseWriter, r *http.Request, target interface{}) error {
	defer r.Body.Close()

	body := io.LimitReader(r.Body, requestBodyLimit+1)
	payload, err := io.ReadAll(body)
	if err != nil {
		return err
	}

	if int64(len(payload)) > requestBodyLimit {
		return fmt.Errorf("request body too large")
	}

	if len(payload) == 0 {
		return fmt.Errorf("empty request body")
	}

	if err := json.Unmarshal(payload, target); err != nil {
		return err
	}

	return nil
}

func sanitizeString(value string, maxLength int) string {
	trimmed := strings.TrimSpace(value)
	normalized := strings.Join(strings.Fields(trimmed), " ")

	if maxLength <= 0 {
		return normalized
	}

	if len(normalized) <= maxLength {
		return normalized
	}

	return normalized[:maxLength]
}

func writeJSON(w http.ResponseWriter, status int, response WebhookResponse) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(response)
}

func (app *appConfig) sendTelegramMessage(message string) error {
	msg := tgbotapi.NewMessage(app.chatID, message)
	msg.ParseMode = ""
	msg.DisableNotification = true

	if _, err := app.bot.Send(msg); err != nil {
		return err
	}

	return nil
}

func (app *appConfig) buildSiteAccessMessage(req SiteAccessRequest) string {
	return fmt.Sprintf(
		"🔔 Novo acesso ao site!\n\n"+
			"Página: %s\n"+
			"Origem: %s\n"+
			"Dispositivo: %s\n"+
			"IP: %s\n"+
			"Localização: %s\n"+
			"Timestamp: %s",
		orDefault(req.CurrentPage, "Desconhecida"),
		orDefault(req.Referrer, "Acesso direto"),
		orDefault(req.Device, "Desconhecido"),
		orDefault(req.IP, "Não disponível"),
		orDefault(req.Location, "Não disponível"),
		currentBrazilTimestamp(),
	)
}

func (app *appConfig) buildContactMessage(req ContactFormRequest) string {
	parts := []string{
		"📨 Nova mensagem de contato:\n",
		fmt.Sprintf("Nome: %s\n", orDefault(req.Name, "Não informado")),
		fmt.Sprintf("Telefone: %s\n", orDefault(req.Phone, "Não informado")),
		fmt.Sprintf("E-mail: %s\n", orDefault(req.Email, "Não informado")),
		fmt.Sprintf("Mensagem: %s\n\n", orDefault(req.Message, "")),
		fmt.Sprintf("Dispositivo: %s\n", orDefault(req.Device, "Desconhecido")),
		fmt.Sprintf("Navegador: %s\n", orDefault(req.Browser, "Desconhecido")),
		fmt.Sprintf("Página atual: %s\n", orDefault(req.CurrentPage, "Desconhecida")),
		fmt.Sprintf("Timestamp: %s", orDefault(req.Timestamp, currentBrazilTimestamp())),
	}

	return strings.Join(parts, "")
}

func currentBrazilTimestamp() string {
	timestampFormat := "2006-01-02 15:04:05"
	location, err := time.LoadLocation("America/Sao_Paulo")
	if err != nil {
		return time.Now().UTC().Format(timestampFormat)
	}

	return time.Now().In(location).Format(timestampFormat)
}

func orDefault(value, fallback string) string {
	if strings.TrimSpace(value) == "" {
		return fallback
	}

	return value
}

func getIP(r *http.Request) string {
	ip := r.Header.Get("X-Forwarded-For")
	if ip == "" {
		ip = r.Header.Get("X-Real-IP")
	}

	if ip == "" {
		var err error
		ip, _, err = net.SplitHostPort(r.RemoteAddr)
		if err != nil {
			ip = r.RemoteAddr
		}
	}

	ip = strings.TrimSpace(strings.Split(ip, ",")[0])
	if ip == "" {
		return ""
	}

	return ip
}

func isPrivateIP(ip string) bool {
	parsed := net.ParseIP(ip)
	if parsed == nil {
		return false
	}

	if parsed.IsLoopback() || parsed.IsPrivate() || parsed.IsLinkLocalUnicast() || parsed.IsLinkLocalMulticast() {
		return true
	}

	return false
}

func (app *appConfig) getLocation(ip string) (string, error) {
	if ip == "" || isPrivateIP(ip) {
		return "Rede local", nil
	}

	requestURL := fmt.Sprintf("https://ip-api.com/json/%s?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as", ip)
	ctx, cancel := context.WithTimeout(context.Background(), trackingTimeout)
	defer cancel()

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, requestURL, nil)
	if err != nil {
		return "", err
	}

	response, err := app.locationClient.Do(req)
	if err != nil {
		return "", fmt.Errorf("error fetching location: %v", err)
	}
	defer response.Body.Close()

	if response.StatusCode >= http.StatusBadRequest {
		return "", fmt.Errorf("ip-api request failed with status=%d", response.StatusCode)
	}

	var info IPInfo
	if err := json.NewDecoder(response.Body).Decode(&info); err != nil {
		return "", fmt.Errorf("error parsing location data: %v", err)
	}

	if info.Status != "success" {
		if info.Message != "" {
			return info.Message, nil
		}

		return "Localização não disponível", nil
	}

	return fmt.Sprintf(
		"%s, %s, %s (%s) - %s",
		info.City,
		info.Region,
		info.Country,
		info.CountryCode,
		info.ISP,
	), nil
}
