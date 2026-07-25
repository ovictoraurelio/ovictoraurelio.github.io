package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"os"
	"strings"
	"time"

	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
)

// IPInfo represents the response from ip-api.com
type IPInfo struct {
	Status      string  `json:"status"`
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

// SiteAccessRequest represents the incoming site access webhook request
type SiteAccessRequest struct {
	Device      string `json:"device"`
	CurrentPage string `json:"currentPage"`
	Referrer    string `json:"referrer"`
	IP          string `json:"ip"`
	Location    string `json:"location"`
}

// ContactFormRequest represents the incoming contact form webhook request
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

// WebhookResponse represents the response sent back to the client
type WebhookResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// allowedOrigins is the list of origins allowed by CORS
var allowedOrigins = map[string]struct{}{
	"http://localhost:3000": {},
	"https://victoraurelio.com": {},
}

// setCORSHeaders sets CORS headers if the Origin is allowed
func setCORSHeaders(w http.ResponseWriter, r *http.Request) bool {
	origin := r.Header.Get("Origin")
	if _, ok := allowedOrigins[origin]; ok {
		w.Header().Set("Access-Control-Allow-Origin", origin)
		w.Header().Set("Vary", "Origin")
		w.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		return true
	}
	return false
}

func main() {
	// Get port from environment variable or use default
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Get Telegram Bot Token from environment
	botToken := os.Getenv("TELEGRAM_BOT_TOKEN")
	if botToken == "" {
		log.Fatal("TELEGRAM_BOT_TOKEN environment variable is required")
	}

	// Initialize Telegram bot
	bot, err := tgbotapi.NewBotAPI(botToken)
	if err != nil {
		log.Fatalf("Failed to initialize Telegram bot: %v", err)
	}

	// Set up HTTP server for site access notifications
	http.HandleFunc("/webhooks/site-access", func(w http.ResponseWriter, r *http.Request) {
		// log.Println("Received site access notification")

		log.Printf("Request: %+v", r)  // Dump the entire request
		log.Printf("Headers: %v", r.Header)
		log.Printf("Body: %v", r.Body)
		// Handle CORS preflight
		if setCORSHeaders(w, r) && r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		// Only accept POST requests
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		setCORSHeaders(w, r)

		// Read and log the request body
		bodyBytes, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body", http.StatusBadRequest)
			return
		}

		// Parse request body
		var req SiteAccessRequest
		if err := json.Unmarshal(bodyBytes, &req); err != nil {
			http.Error(w, "Invalid request body", http.StatusBadRequest)
			return
		}

		// Get client IP from request headers
		clientIP := getIP(r)
		if req.IP == "" {
			req.IP = clientIP
		}

		// Get location information
		location, err := getLocation(clientIP)
		if err != nil {
			log.Printf("Error getting location: %v", err)
		}
		req.Location = location

		// Add server timestamp in America/Sao_Paulo timezone
		loc, _ := time.LoadLocation("America/Sao_Paulo")
		serverTime := time.Now().In(loc)
		timestamp := serverTime.Format("2006-01-02 15:04:05")

		// Log the complete request for debugging
		log.Printf("Request details - Time: %s, IP: %s, Location: %s, Device: %s, Page: %s, Referrer: %s",
			timestamp, req.IP, req.Location, req.Device, req.CurrentPage, req.Referrer)


		// Format message for Telegram
		message := fmt.Sprintf("🔔 **Novo acesso ao site!**\n\n"+
			"📱 **Dispositivo**: %s\n"+
			"📄 **Página**: %s\n"+
			"🌐 **Origem**: %s\n"+
			"🔍 **IP**: %s\n"+
			"🌎 **Localização**: %s\n"+
			"🕒 **Data/Hora**: %s (Horário de Brasília)",
			getOrDefault(req.Device, "Desconhecido"),
			getOrDefault(req.CurrentPage, "Desconhecida"),
			getOrDefault(req.Referrer, "Acesso direto"),
			getOrDefault(req.IP, "Não disponível"),
			getOrDefault(req.Location, "Não disponível"),
			timestamp)

		// Send message to Telegram
		chatID := int64(-4619766327) // The chat ID from the workflow
		log.Println("Sending message to Telegram:", message)
		msg := tgbotapi.NewMessage(chatID, message)
		msg.ParseMode = "Markdown"
		msg.DisableNotification = false

		responseTelegram, err := bot.Send(msg)
		if err != nil {
			log.Printf("Failed to send Telegram message: %v", err)
			http.Error(w, "Failed to send notification", http.StatusInternalServerError)
			return
		}

		log.Println("Telegram message sent successfully:", responseTelegram)

		// Return success response
		response := WebhookResponse{
			Success: true,
			Message: "Notificação enviada com sucesso!",
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(response)
	})

	// Set up HTTP server for contact form submissions
	http.HandleFunc("/webhooks/contact-message", func(w http.ResponseWriter, r *http.Request) {
		// Handle CORS preflight
		if setCORSHeaders(w, r) && r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}
		// Only accept POST requests
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		setCORSHeaders(w, r)

		// Parse request body
		var req ContactFormRequest
		if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
			http.Error(w, "Invalid request body", http.StatusBadRequest)
			return
		}

		// Format message for Telegram
		message := fmt.Sprintf("📨 **Nova mensagem de contato!**\n\n"+
			"👤 **Nome**: %s\n"+
			"📱 **Telefone**: %s\n"+
			"📧 **Email**: %s\n\n"+
			"💬 **Mensagem**:\n%s\n\n"+
			"🕒 **Data/Hora**: %s",
			getOrDefault(req.Name, "Não informado"),
			getOrDefault(req.Phone, "Não informado"),
			getOrDefault(req.Email, "Não informado"),
			getOrDefault(req.Message, ""),
			time.Now().Format("2006-01-02 15:04:05"))

		// Send message to Telegram
		chatID := int64(-4619766327) // The chat ID from the workflow
		msg := tgbotapi.NewMessage(chatID, message)
		msg.ParseMode = "Markdown"
		msg.DisableNotification = false

		_, err := bot.Send(msg)
		if err != nil {
			log.Printf("Failed to send Telegram message: %v", err)
			http.Error(w, "Failed to send notification", http.StatusInternalServerError)
			return
		}

		// Return success response
		response := WebhookResponse{
			Success: true,
			Message: "Mensagem recebida com sucesso!",
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		json.NewEncoder(w).Encode(response)
	})

	// Start the server
	log.Printf("Server starting on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

// getOrDefault returns the value if it's not empty, otherwise returns the default value
// getIP extracts the real IP address from the request
func getIP(r *http.Request) string {
	// Check for X-Forwarded-For header first (common with proxies/reverse proxies)
	ip := r.Header.Get("X-Forwarded-For")
	if ip == "" {
		ip = r.Header.Get("X-Real-IP")
	}
	if ip == "" {
		// If no proxy headers, use RemoteAddr
		var err error
		ip, _, err = net.SplitHostPort(r.RemoteAddr)
		if err != nil {
			ip = r.RemoteAddr
		}
	}
	// Handle multiple IPs in X-Forwarded-For
	ips := strings.Split(ip, ",")
	return strings.TrimSpace(ips[0])
}

// getLocation gets location information for an IP address using ip-api.com
func getLocation(ip string) (string, error) {
	// Skip local IPs
	if ip == "" || ip == "127.0.0.1" || strings.HasPrefix(ip, "192.168.") || strings.HasPrefix(ip, "10.") {
		return "Local Network", nil
	}

	url := fmt.Sprintf("http://ip-api.com/json/%s?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query", ip)
	resp, err := http.Get(url)
	if err != nil {
		return "", fmt.Errorf("error fetching location: %v", err)
	}
	defer resp.Body.Close()

	var info IPInfo
	if err := json.NewDecoder(resp.Body).Decode(&info); err != nil {
		return "", fmt.Errorf("error parsing location data: %v", err)
	}

	if info.Status != "success" {
		return "Unknown Location", nil
	}

	location := fmt.Sprintf("%s, %s, %s (%s) - %s", 
		info.City, 
		info.Region, 
		info.Country,
		info.CountryCode,
		info.ISP)
	
	return location, nil
}

// getOrDefault returns the value if it's not empty, otherwise returns the default value
func getOrDefault(value, defaultValue string) string {
	if value == "" {
		return defaultValue
	}
	return value
}
