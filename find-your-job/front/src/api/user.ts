import { IUserUpdate } from "src/interfaces/IUser";
import api from "./axios";

export const updateUser = async (userId: string, data: IUserUpdate) => {
  try {
    const response = await api.put(`/users/edit/${userId}`, data);
    return response.data;
  } catch (error: any) {
    console.error("Error al actualizar usuario:", error);
    throw new Error(error.response?.data?.message || "No se pudo actualizar el usuario");
  }
};
