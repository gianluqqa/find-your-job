import { IStudy } from "src/interfaces/IStudy";
import api from "./axios";
import { ISkill, ISkillCreate } from "src/interfaces/ISkills";
import { ICertificate } from "src/interfaces/ICertificate";

// Studies
export const createStudy = async (data: IStudy, userId: string) => {
  try {
    const response = await api.post("/studies/create", data);
    return response.data;
  } catch (error) {
    throw new Error("Error al crear el study");
  }
};

// Skills
export const getSkillsByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/skills/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las skills del usuario:", error);
    throw new Error("No se pudieron obtener las skills del usuario.");
  }
};

export const createSkill = async (data: ISkillCreate) => {
  try {
    const response = await api.post("/skills/create", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear la skill:", error);
    throw new Error("No se pudo crear la skill.");
  }
};

export const deleteSkill = async (skillId: string, userId: string) => {
  try {
    const response = await api.delete(`/skills/delete/${skillId}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la skill:", error);
    throw new Error("No se pudo eliminar la skill.");
  }
};

// Technologies
export const getTechnologies = async () => {
  try {
    const response = await api.get("/technologies");
    return response.data; // Devuelve array de tecnologías
  } catch (error) {
    console.error("Error fetching technologies:", error);
    throw new Error("No se pudo cargar la lista de tecnologías");
  }
};

// Certificates
export const createCertificate = async (data: ICertificate) => {
  try {
    const response = await api.post("/certificates/create", data);

    return response.data;
  } catch (error) {
    console.error("Error al crear el certificado:", error);
    throw new Error("No se pudo crear el certificado.");
  }
};

export const getCertificatesByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/certificates/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener los certificados del usuario:", error);
    throw new Error("No se pudieron obtener los certificados del usuario.");
  }
};

export const deleteCertificate = async (certificateId: string, userId: string) => {
  try {
    const response = await api.delete(`/certificates/delete/${certificateId}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el certificado:", error);
    throw new Error("No se pudo eliminar el certificado.");
  }
};
