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
} from "firebase/auth";
import { auth } from "@/lib/firebase";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signOut: () => Promise<void>;
  isReady: boolean;
  refreshUser: () => void;
  updateProfile: (updates: { displayName?: string | null; photoURL?: string | null }) => Promise<void>;
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

  const refreshUser = () => {
    setUser(auth?.currentUser ?? null);
  };

  const updateProfile = async (updates: { displayName?: string | null; photoURL?: string | null }) => {
    const currentUser = auth?.currentUser;
    if (!currentUser) return;
    await firebaseUpdateProfile(currentUser, updates);
    setUser(auth.currentUser);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signOut, isReady, refreshUser, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
