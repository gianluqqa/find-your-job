import { IStudy } from "src/interfaces/IStudy";
import api from "./axios";

export const createStudy = async (data: IStudy, userId:string ) => {
  try {
    const response = await api.post("/studies/create", data);
    return response.data;
  } catch (error) {
    throw new Error("Error al crear el study");
  }
};
