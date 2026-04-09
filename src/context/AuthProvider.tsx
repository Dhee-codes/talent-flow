import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "./AuthContextType";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [user, setuser] = useState<User | null>(null);

  const login = (user: User) => {
    setuser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setuser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          login(data);
        }
      } catch {
        // no active session, do nothing
      }
    };

    restoreSession();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
