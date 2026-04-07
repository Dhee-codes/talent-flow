import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { User } from "./AuthContextType";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setuser] = useState<User | null>(null);

  const login = (user: User) => {
    setuser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setuser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
