import { IStudy } from "src/interfaces/IStudy";
import api from "./axios";
import { ISkillCreate } from "src/interfaces/ISkills";
import { ICertificate } from "src/interfaces/ICertificate";
import { IExperience } from "src/interfaces/IExperience";

//? //////////////////////////////////////////////////////////////////////STUDIES/////////////////////////////////////////////////////////////////////////////////////////
export const createStudy = async (data: IStudy) => {
  try {
    const response = await api.post("/studies/create", data);
    return response.data;
  } catch (error) {
    throw new Error("Error al crear el study");
  }
};

export const getStudiesByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/studies/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las estudias del usuario:", error);
    throw new Error("No se pudieron obtener las estudias del usuario.");
  }
};

export const deleteStudy = async (studyId: string, userId: string) => {
  try {
    const response = await api.delete(`/studies/delete/${studyId}`, {
      data: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar la estudia:", error);
    throw new Error("No se pudo eliminar la estudia.");
  }
};

export const editStudy = async (studyId: string, data: IStudy) => {
  try {
    const response = await api.put(`/studies/edit/${studyId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al editar la estudia:", error);
    throw new Error("No se pudo editar la estudia.");
  }
};

//? //////////////////////////////////////////////////////////////////////SKILLS/////////////////////////////////////////////////////////////////////////////////////////
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

//* ///////////////////////////////////////////////////////////////////TECHNOLOGIES/////////////////////////////////////////////////////////////////////////////////////
export const getTechnologies = async () => {
  try {
    const response = await api.get("/technologies");
    return response.data; // Devuelve array de tecnologías
  } catch (error) {
    console.error("Error fetching technologies:", error);
    throw new Error("No se pudo cargar la lista de tecnologías");
  }
};

//? //////////////////////////////////////////////////////////////////////CERTIFICATE/////////////////////////////////////////////////////////////////////////////////////////

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

export const editCertificate = async (certificateId: string, data: ICertificate) => {
  try {
    const response = await api.put(`/certificates/edit/${certificateId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al editar el certificado:", error);
    throw new Error("No se pudo editar el certificado.");
  }
};

//? //////////////////////////////////////////////////////////////////////EXPERIENCES/////////////////////////////////////////////////////////////////////////////////////////

export const createExperience = async (data: IExperience) => {
  try {
    const response = await api.post("/experiences/create", data);
    return response.data;
  } catch (error) {
    console.error("Error al crear la experiencia:", error);
    throw new Error("No se pudo crear la experiencia.");
  }
};

export const getExperiencesByUserId = async (userId: string) => {
  try {
    const response = await api.get(`/experiences/get/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las experiencias del usuario:", error);
    throw new Error("No se pudieron obtener las experiencias del usuario.");
  }
};

export const deleteExperience = async (experienceId: string, userId: string) => {
  try {
    const response = await api.delete(`/experiences/delete/${experienceId}`, {
      data: { userId },
    });
  } catch (error) {
    console.error("Error al eliminar la experiencia:", error);
  }
};

export const editExperience = async (experienceId: string, data: IExperience) => {
  try {
    const response = await api.put(`/experiences/edit/${experienceId}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al editar la experiencia:", error);
    throw new Error("No se pudo editar la experiencia.");
  }
};
