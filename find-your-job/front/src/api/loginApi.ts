import api from "./axios";
import { ILogin } from "src/interfaces/ILogin";

export const loginApi = async (data: ILogin) => {
  try {
    // Hacemos el POST a /users/login
    const response = await api.post("/users/login", {
      email: data.email,
      password: data.password,
      rememberMe: data.rememberMe,
    });

    return response.data;
  } catch (error: any) {
    // Si el backend devuelve un mensaje, lo mostramos; si no, mensaje genérico
    throw new Error(error.response?.data?.message || "Error al loguear al usuario");
  }
};
