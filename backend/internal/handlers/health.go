package handlers

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

// HealthResponse represents the health check response
type HealthResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
}

// HealthCheck handles the health check endpoint
func HealthCheck(c echo.Context) error {
	response := HealthResponse{
		Success: true,
		Message: "Synthora-AI backend running",
	}

	return c.JSON(http.StatusOK, response)
}
