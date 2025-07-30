import api from "./axios";
import { IRegister } from "../interfaces/IRegister";

export const registerApiCandidate = async (data: IRegister) => {
  try {
    // Hacemos el POST a /register
    // Mandamos todos los campos obligatorios + phone
    const response = await api.post("/users/register", {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: "candidate", // aseguramos que siempre sea candidate
      country: data.country,
      state: data.state,
      city: data.city,
      phone: data.phone, // lo mandamos siempre
      termsAccepted: data.termsAccepted,
    });

    // Retornamos solo la data que devuelve el backend
    return response.data;
  } catch (error: any) {
    // Si el backend devuelve un mensaje, lo mostramos; si no, mensaje genérico
    throw new Error(error.response?.data?.message || "Error al registrar candidato");
  }
};

export const registerApiRecruiter = async (data: IRegister) => {
  try {
    // Hacemos el POST a /register
    // Mandamos todos los campos obligatorios + phone
    const response = await api.post("/users/register", {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
      role: "recruiter", // aseguramos que siempre sea recruiter.
      country: data.country,
      state: data.state,
      city: data.city,
      phone: data.phone, // lo mandamos siempre
      termsAccepted: data.termsAccepted,
    });

    // Retornamos solo la data que devuelve el backend
    return response.data;
  } catch (error: any) {
    // Si el backend devuelve un mensaje, lo mostramos; si no, mensaje genérico
    throw new Error(error.response?.data?.message || "Error al registrar candidato");
  }
};
