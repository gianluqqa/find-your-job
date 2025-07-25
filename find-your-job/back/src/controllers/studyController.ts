import { Request, Response } from "express";
import { createStudyService, deleteStudyService, getStudiesByUserService, updateStudyService } from "../services/studyService";

//Controlador que maneja la funcion para crear un study.
export const createStudyController = async (req: Request, res: Response) => {
  try {
    const { userId, ...studyData } = req.body;

    const newStudy = await createStudyService(studyData, userId);

    res.status(201).json(newStudy);
  } catch (error) {
    console.error("❌ Error al crear estudio:", error);
    res.status(400).json({ message: "Error al crear estudio", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para obtener todos los studies de un user.
export const getStudiesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;  
     console.log("📌 ID recibido:", id);

    const studies = await getStudiesByUserService(id);

    return res.status(200).json(studies);
  } catch (error) {
    console.error("❌ Error al obtener estudios del usuario:", error);
    return res.status(400).json({
      message: "Error al obtener estudios",
      error: (error as Error).message,
    });
  }
};

//Controlador que maneja la funcion para eliminar un study.
export const deleteStudyController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const deletedStudy = await deleteStudyService(id, userId);

    res.status(200).json(deletedStudy);

    console.log("✅ Study eliminado con éxito:", deletedStudy);
  } catch (error) {
    console.error("❌ Error al eliminar study:", error);
    res.status(400).json({ message: "Error al eliminar study", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para actualizar un study.
export const updateStudyController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;           // studyId
    const { userId, ...studyData } = req.body;

    const updatedStudy = await updateStudyService(id, userId, studyData);

    return res.status(200).json(updatedStudy);
  } catch (error) {
    console.error("❌ Error al actualizar study:", error);
    return res.status(400).json({
      message: "Error al actualizar study",
      error: (error as Error).message,
    });
  }
};