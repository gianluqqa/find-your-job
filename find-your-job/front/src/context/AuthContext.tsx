"use client";
import React, { createContext, useState, useEffect } from "react";
import { IUser } from "src/interfaces/IUser";

interface AuthContextType {
  user: IUser | null;
  token: string | null;
  login: (user: IUser, token: string) => void;
  logout: () => void;
}

// Creamos el contexto con valores iniciales básicos
export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Al cargar la app, revisamos si hay datos guardados en localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("vac_user");
    const savedToken = localStorage.getItem("vac_token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  // Función para loguear: guarda en state y en localStorage
  const login = (userData: IUser, tokenData: string) => {
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem("vac_user", JSON.stringify(userData));
    localStorage.setItem("vac_token", tokenData);
  };

  // Función para desloguear: limpia state y localStorage
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("vac_user");
    localStorage.removeItem("vac_token");
  };

  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>;
};
