package handlers

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/synthora/synthora-ai/internal/config"
)

// TestFirestoreResponse represents the response for test-firestore endpoint
type TestFirestoreResponse struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	UserID  string `json:"user_id,omitempty"`
}

// TestFirestore handles the test Firestore endpoint
func TestFirestore(c echo.Context) error {
	ctx := context.Background()

	// Get Firebase client
	firebaseClient, err := config.GetFirebaseClient()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to get Firebase client: %v", err),
		})
	}

	// Generate test user ID
	userID := fmt.Sprintf("test_user_%d", time.Now().Unix())

	// Create user document
	userDoc := map[string]interface{}{
		"created_at": time.Now(),
		"email":      "test@example.com",
		"name":       "Test User",
		"is_active":  true,
	}

	userRef := firebaseClient.Firestore.Collection("users").Doc(userID)
	_, err = userRef.Set(ctx, userDoc)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to create user document: %v", err),
		})
	}

	// Create conversation subcollection
	conversationDoc := map[string]interface{}{
		"created_at": time.Now(),
		"title":      "Test Conversation",
		"updated_at": time.Now(),
	}

	conversationRef := userRef.Collection("conversations").NewDoc()
	_, err = conversationRef.Set(ctx, conversationDoc)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to create conversation document: %v", err),
		})
	}

	// Add test message to conversation
	messageDoc := map[string]interface{}{
		"content":    "This is a test message from the Synthora-AI backend",
		"created_at": time.Now(),
		"role":       "user",
		"message_id": fmt.Sprintf("msg_%d", time.Now().Unix()),
	}

	_, err = conversationRef.Collection("messages").NewDoc().Set(ctx, messageDoc)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to create message document: %v", err),
		})
	}

	// Query to verify the data was created
	userSnap, err := userRef.Get(ctx)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to verify user document: %v", err),
		})
	}

	// Count conversations
	conversations, err := userRef.Collection("conversations").Documents(ctx).GetAll()
	if err != nil {
		return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
			Success: false,
			Message: fmt.Sprintf("Failed to count conversations: %v", err),
		})
	}

	// Count messages in first conversation
	if len(conversations) > 0 {
		messages, err := conversations[0].Ref.Collection("messages").Documents(ctx).GetAll()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, TestFirestoreResponse{
				Success: false,
				Message: fmt.Sprintf("Failed to count messages: %v", err),
			})
		}

		return c.JSON(http.StatusOK, TestFirestoreResponse{
			Success: true,
			Message: fmt.Sprintf("Successfully created user with %d conversation(s) and %d message(s)",
				len(conversations), len(messages)),
			UserID: userID,
		})
	}

	return c.JSON(http.StatusOK, TestFirestoreResponse{
		Success: true,
		Message: fmt.Sprintf("Successfully created user with %d conversation(s)", len(conversations)),
		UserID:  userID,
	})
}
