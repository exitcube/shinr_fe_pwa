"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { getAccessToken, refreshAccessToken } from "@/helper/authHelpers";
import { IUser } from "@/types/user";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  accessToken: string | null;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [user, setUser] = useState<IUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    setAccessToken(null);
    router.push("/login");
  };

  const loadUser = async () => {
    const token = getAccessToken();

    if (!token) {
      const refreshed = await refreshAccessToken();
      if (!refreshed) {
        logout();
        return;
      }
      setAccessToken(refreshed);
    } else {
      setAccessToken(token);
    }

    // Fetch user details if needed (optional)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        logout();
      }
    } catch {
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        accessToken,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook for components to use auth
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
