package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/synthora/synthora-ai/internal/config"
	"github.com/synthora/synthora-ai/internal/routes"
)

func main() {
	// Load configuration
	cfg := config.LoadConfig()

	// Initialize Echo instance
	e := echo.New()

	// Configure middleware
	setupMiddleware(e, cfg)

	// Setup routes
	routes.SetupRoutes(e)

	// Start server
	go func() {
		log.Printf("Starting %s server on port %s", cfg.App.Name, cfg.Server.Port)
		if err := e.Start(":" + cfg.Server.Port); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Failed to start server: %v", err)
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit

	log.Println("Shutting down server...")

	// Create context with timeout for graceful shutdown
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	// Shutdown server gracefully
	if err := e.Shutdown(ctx); err != nil {
		log.Fatalf("Server forced to shutdown: %v", err)
	}

	log.Println("Server exited gracefully")
}

// setupMiddleware configures all middleware for the application
func setupMiddleware(e *echo.Echo, cfg *config.Config) {
	// Logger middleware
	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Format: "${time_rfc3339} ${status} ${method} ${host}${path} ${latency_human}\n",
	}))

	// Recover middleware
	e.Use(middleware.Recover())

	// CORS middleware
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: cfg.CORS.AllowedOrigins,
		AllowMethods: []string{http.MethodGet, http.MethodPost, http.MethodPut, http.MethodDelete, http.MethodOptions},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept, echo.HeaderAuthorization},
	}))

	// Request ID middleware
	e.Use(middleware.RequestID())
}