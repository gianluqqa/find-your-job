import { Request, Response } from "express";
import { createExperienceService, deleteExperienceService, getExperiencesByCandidateIdService } from "../services/experienceService";

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
