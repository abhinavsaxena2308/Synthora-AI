package config

import (
	"log"
	"os"
	"strconv"
	"strings"

	"github.com/joho/godotenv"
)

// Config holds the application configuration
type Config struct {
	Server   ServerConfig
	App      AppConfig
	CORS     CORSConfig
}

// ServerConfig holds server-related configuration
type ServerConfig struct {
	Port string
	Env  string
}

// AppConfig holds application-specific configuration
type AppConfig struct {
	Name  string
	Debug bool
}

// CORSConfig holds CORS configuration
type CORSConfig struct {
	AllowedOrigins []string
}

// LoadConfig loads configuration from environment variables
func LoadConfig() *Config {
	// Load .env file if it exists
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using environment variables")
	}

	config := &Config{
		Server: ServerConfig{
			Port: getEnv("PORT", "8080"),
			Env:  getEnv("ENV", "development"),
		},
		App: AppConfig{
			Name:  getEnv("APP_NAME", "Synthora-AI"),
			Debug: getEnvAsBool("DEBUG", true),
		},
		CORS: CORSConfig{
			AllowedOrigins: getEnvAsSlice("CORS_ALLOWED_ORIGINS", []string{"http://localhost:5173"}),
		},
	}

	return config
}

// getEnv gets environment variable or returns default value
func getEnv(key, defaultValue string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return defaultValue
}

// getEnvAsBool gets environment variable as boolean or returns default value
func getEnvAsBool(key string, defaultValue bool) bool {
	valueStr := getEnv(key, "")
	if valueStr == "" {
		return defaultValue
	}
	
	value, err := strconv.ParseBool(valueStr)
	if err != nil {
		return defaultValue
	}
	return value
}

// getEnvAsSlice gets environment variable as string slice or returns default value
func getEnvAsSlice(key string, defaultValue []string) []string {
	valueStr := getEnv(key, "")
	if valueStr == "" {
		return defaultValue
	}
	
	// Simple comma-separated parsing
	origins := []string{}
	for _, origin := range strings.Split(valueStr, ",") {
		trimmed := strings.TrimSpace(origin)
		if trimmed != "" {
			origins = append(origins, trimmed)
		}
	}
	
	if len(origins) == 0 {
		return defaultValue
	}
	return origins
}