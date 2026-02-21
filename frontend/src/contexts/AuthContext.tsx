import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type User,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  updateProfile as firebaseUpdateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  deleteUser,
} from "firebase/auth";
import { doc, deleteDoc, collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  isReady: boolean;
  refreshUser: () => void;
  updateProfile: (updates: { displayName?: string | null; photoURL?: string | null }) => Promise<void>;
  deleteAccount: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      setIsReady(true);
      return;
    }
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      setIsReady(true);
    });
    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    if (auth) await firebaseSignOut(auth);
  };

  const signInWithGoogle = async () => {
    if (!auth) throw new Error("Auth not configured");
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const refreshUser = () => {
    setUser(auth?.currentUser ?? null);
  };

  const updateProfile = async (updates: { displayName?: string | null; photoURL?: string | null }) => {
    const currentUser = auth?.currentUser;
    if (!currentUser) return;
    await firebaseUpdateProfile(currentUser, updates);
    setUser(auth.currentUser);
  };

  const deleteAccount: () => Promise<void> = async () => {
    const currentUser = auth?.currentUser;
    if (!currentUser) {
      throw new Error("No user is currently signed in");
    }

    // Add timeout to prevent hanging
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("Account deletion timed out. Please try again.")), 30000);
    });

    const deletePromise = (async () => {
      try {
        // First, delete all user data from Firestore
        if (db) {
          try {
            // Delete user profile document
            const userDocRef = doc(db, "users", currentUser.uid);
            await deleteDoc(userDocRef).catch((error) => {
              // Ignore if document doesn't exist or permission denied
              console.log("Profile document deletion skipped:", error.message);
            });

            // Delete user history/generations
            try {
              const historyQuery = query(
                collection(db, "generations"),
                where("userId", "==", currentUser.uid)
              );
              const historySnapshot = await getDocs(historyQuery);
              const deleteHistoryPromises = historySnapshot.docs.map(doc => 
                deleteDoc(doc.ref).catch(error => {
                  console.log("History document deletion skipped:", error.message);
                  return Promise.resolve();
                })
              );
              await Promise.all(deleteHistoryPromises);
            } catch (error) {
              console.log("History collection query skipped:", error.message);
            }

            // Delete user settings/preferences
            try {
              const settingsQuery = query(
                collection(db, "settings"),
                where("userId", "==", currentUser.uid)
              );
              const settingsSnapshot = await getDocs(settingsQuery);
              const deleteSettingsPromises = settingsSnapshot.docs.map(doc => 
                deleteDoc(doc.ref).catch(error => {
                  console.log("Settings document deletion skipped:", error.message);
                  return Promise.resolve();
                })
              );
              await Promise.all(deleteSettingsPromises);
            } catch (error) {
              console.log("Settings collection query skipped:", error.message);
            }
          } catch (firestoreError) {
            console.log("Firestore operations skipped:", firestoreError.message);
            // Continue with Firebase Auth deletion even if Firestore fails
          }
        }

        // Finally, delete the Firebase Authentication user
        await deleteUser(currentUser);
        
        // Clear local state
        setUser(null);
      } catch (error: any) {
        console.error("Error deleting account:", error);
        // If it's a permission error, we should still try to delete the auth user
        if (error.code === 'permission-denied' && currentUser) {
          try {
            await deleteUser(currentUser);
            setUser(null);
            return;
          } catch (authError) {
            console.error("Error deleting auth user:", authError);
            throw authError;
          }
        }
        throw error;
      }
    })();

    // Race between the delete operation and timeout
    await Promise.race([deletePromise, timeoutPromise]);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut, signInWithGoogle, isReady, refreshUser, updateProfile, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  );
};
