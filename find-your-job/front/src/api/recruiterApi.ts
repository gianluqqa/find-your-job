import { ICompany, ICreateCompany } from "src/interfaces/ICompany";
import api from "./axios";

//? //////////////////////////////////////////////////////////////////////COMPANIES/////////////////////////////////////////////////////////////////////////////////////////
export const createCompany = async (data: ICreateCompany) => {
  try {
    const response = await api.post("/companies/create", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear la empresa:", error);
    throw new Error("No se pudo crear la empresa.");
  }
};

export const getCompaniesByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/companies/get/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las empresas del usuario:", error);
    throw new Error("No se pudieron obtener las empresas del usuario.");
  }
};

export const getAllCompanies = async () => {
  try {
    const response = await api.get("/companies");
    return response.data;
  } catch (error) {
    console.error("Error al obtener todas las empresas:", error);
    throw new Error("No se pudieron obtener todas las empresas.");
  }
};

//? //////////////////////////////////////////////////////////////////////CATEGORIES/////////////////////////////////////////////////////////////////////////////////////////
export const getAllCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error al obtener todas las categorías:", error);

    throw new Error("No se pudieron obtener todas las categorías.");
  }
};
