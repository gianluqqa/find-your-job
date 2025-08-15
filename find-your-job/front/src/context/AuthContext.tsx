"use client";
import React, { createContext, useState, useEffect } from "react";
import { IUser } from "src/interfaces/IUser";

interface AuthContextType {
  user: IUser | null;
  token: string | null;
  login: (user: IUser, token: string) => void;
  logout: () => void;
  updateUserContext: (updatedData: Partial<IUser>) => void; // 🔹 nueva función
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  login: () => {},
  logout: () => {},
  updateUserContext: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("vac_user");
    const savedToken = localStorage.getItem("vac_token");

    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  const login = (userData: IUser, tokenData: string) => {
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem("vac_user", JSON.stringify(userData));
    localStorage.setItem("vac_token", tokenData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("vac_user");
    localStorage.removeItem("vac_token");
  };

  // 🔹 Función para actualizar solo datos parciales del usuario
  const updateUserContext = (updatedData: Partial<IUser>) => {
    if (!user) return;
    const newUser = { ...user, ...updatedData };
    setUser(newUser);
    localStorage.setItem("vac_user", JSON.stringify(newUser));
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, updateUserContext }}>
      {children}
    </AuthContext.Provider>
  );
};
