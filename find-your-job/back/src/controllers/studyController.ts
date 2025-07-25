import { Request, Response } from "express";
import { createStudyService, deleteStudyService, getStudiesByUserService, updateStudyService } from "../services/studyService";

//Controlador que maneja la funcion para crear un study.
export const createStudyController = async (req: Request, res: Response) => {
  try {
    const { userId, ...studyData } = req.body;

    const newStudy = await createStudyService(studyData, userId);

    const filteredStudy = {
      id: newStudy.id,
      title: newStudy.title,
      institution: newStudy.institution,
      degree: newStudy.degree,
      field: newStudy.field,
      startDate: newStudy.startDate,
      endDate: newStudy.endDate,
      description: newStudy.description,
      user: newStudy.user && {
        id: newStudy.user.id,
        name: newStudy.user.name,
        email: newStudy.user.email,
        role: newStudy.user.role,
      },
    };

    return res.status(201).json(filteredStudy);
  } catch (error) {
    console.error("❌ Error al crear estudio:", error);
    return res.status(400).json({ message: "Error al crear estudio", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para obtener todos los studies de un user.
export const getStudiesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("📌 ID recibido:", id);

    const studies = await getStudiesByUserService(id);

    const filteredStudies = studies.map((study) => ({
      id: study.id,
      title: study.title,
      institution: study.institution,
      degree: study.degree,
      field: study.field,
      startDate: study.startDate,
      endDate: study.endDate,
      description: study.description,
      user: study.user && {
        id: study.user.id,
        name: study.user.name,
        email: study.user.email,
        role: study.user.role,
      },
    }));

    return res.status(200).json(filteredStudies);
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
    const { id } = req.params; // studyId
    const { userId, ...studyData } = req.body;

    const updatedStudy = await updateStudyService(id, userId, studyData);

    const filteredStudy = {
      id: updatedStudy.id,
      title: updatedStudy.title,
      institution: updatedStudy.institution,
      degree: updatedStudy.degree,
      field: updatedStudy.field,
      startDate: updatedStudy.startDate,
      endDate: updatedStudy.endDate,
      description: updatedStudy.description,
      user: updatedStudy.user && {
        id: updatedStudy.user.id,
        name: updatedStudy.user.name,
        email: updatedStudy.user.email,
        role: updatedStudy.user.role,
      },
    };

    return res.status(200).json(filteredStudy);
  } catch (error) {
    console.error("❌ Error al actualizar study:", error);
    return res.status(400).json({
      message: "Error al actualizar study",
      error: (error as Error).message,
    });
  }
};
