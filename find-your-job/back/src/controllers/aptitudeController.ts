import { Request, Response } from "express";
import { createAptitudeService, deleteAptitudeService, getAptitudesByUserService, updateAptitudeService } from "../services/aptitudeService";

export const createAptitudeController = async (req: Request, res: Response) => {
  try {
    const newAptitude = await createAptitudeService(req.body);
    console.log("✅ Aptitud creada:", newAptitude);
    return res.status(201).json(newAptitude);
  } catch (error) {
    console.error("❌ Error al crear aptitud:", error);
    return res.status(400).json({ message: "Error al crear aptitud", error: (error as Error).message });
  }
};

export const getAptitudesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtenemos el ID del usuario.
    const aptitudes = await getAptitudesByUserService(id); // Llamamos a la función para obtener las aptitudes del usuario.
    console.log("✅ Aptitudes obtenidas:", aptitudes);
    return res.status(200).json(aptitudes);
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
    const { id } = req.params; // Obtenemos el ID del aptitude que queremos actualizar.
    const updateData = req.body; // Obtenemos los datos que queremos actualizar.

    const newAptitude = await updateAptitudeService(id, updateData); // Llamamos a la función para actualizar el aptitude.

    console.log("✅ Aptitude actualizada con éxito:", newAptitude);
    res.status(200).json(newAptitude);
  } catch (error) {
    console.error("❌ Error al actualizar aptitude:", error);
    res.status(400).json({ message: "Error al actualizar aptitude", error: (error as Error).message });
  }
};
