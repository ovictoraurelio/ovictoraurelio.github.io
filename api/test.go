package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

type RequestData struct {
	CurrentPage  string `json:"currentPage"`
	Referrer     string `json:"referrer"`
	Device       string `json:"device"`
	Screen       string `json:"screen"`
	Timestamp    string `json:"timestamp"`
	RouteDetails string `json:"routeDetails"`
}

func sendTestRequest() {
	data := RequestData{
		CurrentPage:  "/test-page",
		Referrer:     "http://example.com",
		Device:       "iPhone - Safari",
		Screen:       "375x812",
		Timestamp:    "2025-06-22T14:00:00Z",
		RouteDetails: "test-route",
	}

	jsonData, err := json.Marshal(data)
	if err != nil {
		log.Fatalf("Error encoding JSON: %v", err)
	}

	resp, err := http.Post(
		"http://localhost:8080/webhooks/site-access",
		"application/json",
		bytes.NewBuffer(jsonData),
	)
	if err != nil {
		log.Fatalf("Error sending request: %v", err)
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Error reading response: %v", err)
	}

	fmt.Printf("Status: %s\n", resp.Status)
	fmt.Printf("Response: %s\n", string(body))
}
