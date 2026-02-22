package config

import (
	"context"
	"fmt"
	"log"
	"sync"

	firebase "firebase.google.com/go/v4"
	"firebase.google.com/go/v4/auth"
	"cloud.google.com/go/firestore"
	"google.golang.org/api/option"
)

// FirebaseClient holds Firebase services
type FirebaseClient struct {
	App       *firebase.App
	Auth      *auth.Client
	Firestore *firestore.Client
}

// Global Firebase client instance
var (
	firebaseClient *FirebaseClient
	firebaseOnce   sync.Once
	firebaseError  error
)

// InitializeFirebase initializes Firebase services using service account credentials
func InitializeFirebase(ctx context.Context, cfg *Config) (*FirebaseClient, error) {
	var client *FirebaseClient
	var err error

	firebaseOnce.Do(func() {
		// Create service account JSON from environment variables
		serviceAccountJSON := fmt.Sprintf(`{
			"type": "service_account",
			"project_id": "%s",
			"private_key_id": "firebase-key",
			"private_key": "%s",
			"client_email": "%s",
			"client_id": "firebase-client",
			"auth_uri": "https://accounts.google.com/o/oauth2/auth",
			"token_uri": "https://oauth2.googleapis.com/token",
			"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
			"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk"
		}`, cfg.FirebaseProjectID, cfg.FirebasePrivateKey, cfg.FirebaseClientEmail)

		// Initialize Firebase app
		app, err := firebase.NewApp(ctx, nil, option.WithCredentialsJSON([]byte(serviceAccountJSON)))
		if err != nil {
			firebaseError = fmt.Errorf("failed to initialize Firebase app: %w", err)
			return
		}

		// Get Auth client
		authClient, err := app.Auth(ctx)
		if err != nil {
			firebaseError = fmt.Errorf("failed to initialize Firebase Auth: %w", err)
			return
		}

		// Get Firestore client
		firestoreClient, err := app.Firestore(ctx)
		if err != nil {
			firebaseError = fmt.Errorf("failed to initialize Firestore: %w", err)
			return
		}

		client = &FirebaseClient{
			App:       app,
			Auth:      authClient,
			Firestore: firestoreClient,
		}
		
		firebaseClient = client
		log.Println("Firebase services initialized successfully")
	})

	if firebaseError != nil {
		return nil, firebaseError
	}

	return firebaseClient, nil
}

// GetFirebaseClient returns the global Firebase client instance
func GetFirebaseClient() (*FirebaseClient, error) {
	if firebaseClient == nil {
		return nil, fmt.Errorf("Firebase not initialized, call InitializeFirebase() first")
	}
	return firebaseClient, nil
}

// CloseFirebase closes all Firebase connections
func CloseFirebase(ctx context.Context) error {
	if firebaseClient == nil {
		return nil
	}

	if firebaseClient.Firestore != nil {
		if err := firebaseClient.Firestore.Close(); err != nil {
			return fmt.Errorf("failed to close Firestore client: %w", err)
		}
		log.Println("Firestore client closed successfully")
	}

	return nil
}