import { createContext, useState, useEffect } from "react";

// Create the context
export const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Login function
  const login = (tokenValue) => {
    setToken(tokenValue);
    localStorage.setItem("token", tokenValue);
  };

  // Logout function
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  // Load token if exists
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
