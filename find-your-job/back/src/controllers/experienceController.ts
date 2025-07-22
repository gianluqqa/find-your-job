import { Request, Response } from "express";
import { createExperienceService, deleteExperienceService, getExperiencesByCandidateIdService, updateExperienceService } from "../services/experienceService";

export const createExperienceController = async (req: Request, res: Response) => {
  try {
    const experienceData = req.body;
    const newExperience = await createExperienceService(experienceData);
    return res.status(201).json(newExperience);
  } catch (error) {
    console.error("❌ Error al crear experiencia:", error);
    return res.status(400).json({ message: "Error al crear experiencia", error: (error as Error).message });
  }
};

export const getExperiencesByCandidateIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // id del candidate
    const experiences = await getExperiencesByCandidateIdService(id);
    return res.status(200).json(experiences);
  } catch (error) {
    console.error("❌ Error al obtener experiencias:", error);
    return res.status(400).json({ message: "Error al obtener experiencias", error: (error as Error).message });
  }
};

export const deleteExperienceController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { candidateId } = req.body;

    const result = await deleteExperienceService(id, candidateId);

    return res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error al eliminar experiencia:", error);
    return res.status(400).json({
      message: "Error al eliminar experiencia",
      error: (error as Error).message,
    });
  }
};

export const updateExperienceController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtenemos el ID de la Experience o experienceId que queremos actualizar.
    const candidateId = req.body.candidateId; // Obtenermos el ID del candidato que es el usuario que realiza la actualización.
    const updateData = req.body; // Obtenemos los datos que queremos actualizar.
    const updatedExperience = await updateExperienceService(id, candidateId, updateData); // Llamamos a la función para actualizar la experiencia.

    return res.status(200).json(updatedExperience); //Si todo sale bien, devolvemos la experiencia actualizada.
  } catch (error) {
    console.error("❌ Error al actualizar experiencia:", error);
    return res.status(400).json({ message: "Error al actualizar experiencia", error: (error as Error).message });
  }
}
