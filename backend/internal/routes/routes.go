package routes

import (
	"github.com/labstack/echo/v4"
	"github.com/synthora/synthora-ai/internal/handlers"
)

// SetupRoutes configures all application routes
func SetupRoutes(e *echo.Echo) {
	// Health check route
	e.GET("/api/health", handlers.HealthCheck)
}
