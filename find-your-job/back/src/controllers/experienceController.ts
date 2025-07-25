import { Request, Response } from "express";
import { createExperienceService, deleteExperienceService, getExperiencesByCandidateIdService, updateExperienceService } from "../services/experienceService";

export const createExperienceController = async (req: Request, res: Response) => {
  try {
    const experienceData = req.body;
    const newExperience = await createExperienceService(experienceData);

    const filteredExperience = {
      ...newExperience,
      user: newExperience?.user && {
        id: newExperience.user.id,
        name: newExperience.user.name,
        email: newExperience.user.email,
        role: newExperience.user.role,
      }
    };

    return res.status(201).json(filteredExperience);
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
    const { userId } = req.body;

    const deletedExperience = await deleteExperienceService(id, userId);

    return res.status(200).json(deletedExperience);
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
    const { id } = req.params; // ID de la experiencia
    const userId = req.body.userId; // ID del usuario (candidate)
    const updateData = req.body;   // Datos a actualizar

    const updatedExperience = await updateExperienceService(id, userId, updateData);

    if (!updatedExperience) {
      return res.status(404).json({ message: "Experiencia no encontrada" });
    }

    const filtered = {
      id: updatedExperience.id,
      title: updatedExperience.title,
      company: updatedExperience.company,
      startDate: updatedExperience.startDate,
      endDate: updatedExperience.endDate,
      description: updatedExperience.description,
      location: updatedExperience.location,
      user: updatedExperience.user && {
        id: updatedExperience.user.id,
        name: updatedExperience.user.name,
        email: updatedExperience.user.email,
        role: updatedExperience.user.role,
      },
    };

    return res.status(200).json(filtered);
  } catch (error) {
    console.error("❌ Error al actualizar experiencia:", error);
    return res.status(400).json({
      message: "Error al actualizar experiencia",
      error: (error as Error).message,
    });
  }
};

