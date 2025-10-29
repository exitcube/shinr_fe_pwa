"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { IUser } from "@/types/user";
import { setAccessToken } from "@/redux/slices/authSlice";
import { useAuth } from "@/redux/selectors/authSelector";
import {
  useGenerateRefreshTokenMutation,
  useSetRefreshTokenMutation,
} from "@/hooks/useAuthQuery";

interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
  refreshToken,
}: {
  children: ReactNode;
  refreshToken: string;
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { accessToken } = useAuth();

  const { mutate: getRefreshedToken } = useGenerateRefreshTokenMutation();

  const { mutate: setRefreshCookie } = useSetRefreshTokenMutation();

  const [user, setUser] = useState<IUser | null>(null);

  const logout = useCallback(() => {
    setRefreshCookie("", {
      onSuccess: () => {
        setUser(null);
        dispatch(setAccessToken(null));
        router.push("/login");
      },
    });
  }, [router]);

  const initAuth = useCallback(() => {
    // refresh access token using refreshToken
    if (!accessToken && refreshToken) {
      getRefreshedToken(
        { refreshToken: refreshToken },
        {
          onSuccess: (res) => {
            dispatch(setAccessToken(res?.data.accessToken));
            setRefreshCookie(res.data.refreshToken);
          },
          onError: logout,
        }
      );
      return;
    }

    // access token exists
    if (accessToken) {
      dispatch(setAccessToken(accessToken));
      return;
    }

    // no access token & no refresh token => go to login immediately
    if (!accessToken && !refreshToken) {
      logout();
      return;
    }
  }, [accessToken, refreshToken, dispatch, getRefreshedToken, logout]);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  // Block UI while deciding auth OR if no access token yet
  if (!accessToken) return null;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthProvider");
  return ctx;
};
