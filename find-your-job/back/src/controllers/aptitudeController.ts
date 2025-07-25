import { Request, Response } from "express";
import { createAptitudeService, deleteAptitudeService, getAptitudesByUserService, updateAptitudeService } from "../services/aptitudeService";

export const createAptitudeController = async (req: Request, res: Response) => {
  try {
    const newAptitude = await createAptitudeService(req.body);
    console.log("✅ Aptitud creada:", newAptitude);

    const filteredAptitude = {
      id: newAptitude.id,
      name: newAptitude.name,
      level: newAptitude.level,
      user: newAptitude.user && {
        id: newAptitude.user.id,
        name: newAptitude.user.name,
        email: newAptitude.user.email,
        role: newAptitude.user.role,
      },
    };

    return res.status(201).json(filteredAptitude);
  } catch (error) {
    console.error("❌ Error al crear aptitud:", error);
    return res.status(400).json({ message: "Error al crear aptitud", error: (error as Error).message });
  }
};

export const getAptitudesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // id del user
    const aptitudes = await getAptitudesByUserService(id);

    const filteredAptitudes = aptitudes.map((aptitude) => ({
      id: aptitude.id,
      name: aptitude.name,
      level: aptitude.level,
      user: aptitude.user && {
        id: aptitude.user.id,
        name: aptitude.user.name,
        email: aptitude.user.email,
        role: aptitude.user.role,
      },
    }));

    console.log("✅ Aptitudes obtenidas y filtradas:", filteredAptitudes);
    return res.status(200).json(filteredAptitudes);
  } catch (error) {
    console.error("❌ Error al obtener aptitudes:", error);
    return res.status(400).json({ message: "Error al obtener aptitudes", error: (error as Error).message });
  }
};

export const deleteAptitudeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtenemos el ID del aptitude que queremos eliminar.
    const { userId } = req.body; // Obtenemos el ID del usuario que quiere eliminar la aptitude.

    const deletedAptitude = await deleteAptitudeService(id, userId); // Llamamos a la función para eliminar el aptitude.
    console.log("✅ Aptitude eliminada con éxito:", deletedAptitude);
    res.status(200).json(deletedAptitude);
  } catch (error) {
    console.error("❌ Error al eliminar aptitude:", error);
    res.status(400).json({ message: "Error al eliminar aptitude", error: (error as Error).message });
  }
};

export const updateAptitudeController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // aptitudeId
    const { userId, ...updateData } = req.body;

    const updatedAptitude = await updateAptitudeService(id, userId, updateData);

    const filteredAptitude = {
      id: updatedAptitude.id,
      name: updatedAptitude.name,
      level: updatedAptitude.level,
      user: updatedAptitude.user && {
        id: updatedAptitude.user.id,
        name: updatedAptitude.user.name,
        email: updatedAptitude.user.email,
        role: updatedAptitude.user.role,
      },
    };

    console.log("✅ Aptitude actualizada con éxito:", filteredAptitude);
    return res.status(200).json(filteredAptitude);
  } catch (error) {
    console.error("❌ Error al actualizar aptitude:", error);
    return res.status(400).json({
      message: "Error al actualizar aptitude",
      error: (error as Error).message,
    });
  }
};
