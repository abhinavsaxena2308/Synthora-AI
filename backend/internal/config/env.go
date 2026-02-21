package config

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/joho/godotenv"
)

// Config holds all application configuration
type Config struct {
	// Server configuration
	Port string `json:"port"`

	// API Keys
	OpenAIAPIKey string `json:"-"` // Hidden from JSON output

	// Firebase configuration
	FirebaseProjectID   string `json:"firebase_project_id"`
	FirebaseClientEmail string `json:"-"` // Hidden from JSON output
	FirebasePrivateKey  string `json:"-"` // Hidden from JSON output
}

// Global configuration instance
var globalConfig *Config

// LoadConfig loads configuration from environment variables
func LoadConfig() (*Config, error) {
	// Load .env file if it exists
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	config := &Config{
		Port:                getEnv("PORT", "8080"),
		OpenAIAPIKey:        os.Getenv("OPENAI_API_KEY"),
		FirebaseProjectID:   os.Getenv("FIREBASE_PROJECT_ID"),
		FirebaseClientEmail: os.Getenv("FIREBASE_CLIENT_EMAIL"),
		FirebasePrivateKey:  os.Getenv("FIREBASE_PRIVATE_KEY"),
	}

	// Validate required configuration
	if err := config.validate(); err != nil {
		return nil, fmt.Errorf("configuration validation failed: %w", err)
	}

	globalConfig = config
	return config, nil
}

// GetConfig returns the global configuration instance
func GetConfig() (*Config, error) {
	if globalConfig == nil {
		return nil, fmt.Errorf("configuration not loaded, call LoadConfig() first")
	}
	return globalConfig, nil
}

// validate checks that all required configuration values are present
func (c *Config) validate() error {
	var missing []string

	if c.OpenAIAPIKey == "" {
		missing = append(missing, "OPENAI_API_KEY")
	}

	if c.FirebaseProjectID == "" {
		missing = append(missing, "FIREBASE_PROJECT_ID")
	}

	if c.FirebaseClientEmail == "" {
		missing = append(missing, "FIREBASE_CLIENT_EMAIL")
	}

	if c.FirebasePrivateKey == "" {
		missing = append(missing, "FIREBASE_PRIVATE_KEY")
	}

	if len(missing) > 0 {
		return fmt.Errorf("missing required environment variables: %s", strings.Join(missing, ", "))
	}

	// Validate port format
	if c.Port == "" {
		c.Port = "8080"
	}

	return nil
}

// getEnv gets environment variable or returns default value
func getEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return defaultValue
}

// MaskSensitiveValue masks sensitive values for logging
func MaskSensitiveValue(value string) string {
	if len(value) <= 8 {
		return "****"
	}
	return value[:4] + "****" + value[len(value)-4:]
}

// LogConfig logs non-sensitive configuration values
func (c *Config) LogConfig() {
	log.Printf("Server Configuration:")
	log.Printf("  Port: %s", c.Port)
	log.Printf("  Firebase Project ID: %s", c.FirebaseProjectID)
	log.Printf("  OpenAI API Key: %s", MaskSensitiveValue(c.OpenAIAPIKey))
	log.Printf("  Firebase Client Email: %s", MaskSensitiveValue(c.FirebaseClientEmail))
	log.Printf("  Firebase Private Key: %s", MaskSensitiveValue(c.FirebasePrivateKey))
}
