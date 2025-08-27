import {  ICreateCompany } from "src/interfaces/ICompany";
import { ICreateJob, IJob } from "src/interfaces/IJob";
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
    const response = await api.get(`/companies/all/${userId}`);
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

//? //////////////////////////////////////////////////////////////////////JOBS/////////////////////////////////////////////////////////////////////////////////////////

export const createJob = async (data: ICreateJob) => {
  try {
    const response = await api.post("/jobs/create", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear el trabajo:", error);
    throw new Error("No se pudo crear el trabajo.");
  }
};

export const getJobsByCompany = async (companyId: string) => {
  try {
    const response = await api.get(`/jobs/company/${companyId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los trabajos del usuario:", error);
    throw new Error("No se pudieron obtener los trabajos del usuario.");
  }
};

export const getAllJobs = async () => {
  try {
    const response = await api.get("/jobs/all");
    return response.data;
  } catch (error) {
    console.error("Error al obtener todos los trabajos:", error);
    throw new Error("No se pudieron obtener todos los trabajos.");
  }
};

export const deleteJob = async (jobId: string, userId: string) => {
  try {
    const response = await api.delete(`/jobs/delete/${jobId}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error;
  }
};

export const editJob = async (jobId: string, data: IJob) => {
  try {
    const response = await api.put(`/jobs/edit/${jobId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error editing job:", error);
    throw error;
  }
};

export const getJobsByRecruiter = async (recruiterId: string) => {
  try {
    const response = await api.get(`/jobs/recruiter/${recruiterId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los trabajos del recruiter:", error);
    throw new Error("No se pudieron obtener los trabajos del recruiter.");
  }
};