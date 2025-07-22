import { Request, Response } from "express";
import {createLanguageService, deleteLanguageService, getAllLanguagesByUserService, updateLanguageService} from "../services/languageService";

export const createLanguageController = async (req: Request, res: Response) => {
  try {
    const languageData = req.body;
    const newLanguage = await createLanguageService(languageData);
    console.log("✅ Lenguaje creado:", newLanguage);
    return res.status(201).json(newLanguage);
  } catch (error) {
    console.error("❌ Error al crear lenguaje:", error);
    return res.status(500).json({ message: "Error al crear lenguaje", error: (error as Error).message });
  }
};

export const getAllLanguagesByUserController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id; //Obtenemos el ID del usuario.
    const languages = await getAllLanguagesByUserService(id);
    console.log("✅ Lenguajes obtenidos:", languages);
    return res.status(200).json(languages);
  } catch (error) {
    console.error("❌ Error al obtener lenguajes:", error);
    return res.status(500).json({ message: "Error al obtener lenguajes", error: (error as Error).message });
  }
};

export const updateLanguageController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // Obtenemos el ID del Language que queremos actualizar.

    const updatedLanguage = await updateLanguageService(id, req.body);

    console.log("✅ Lenguaje actualizado con éxito:", updatedLanguage);
    return res.status(200).json(updatedLanguage);
  } catch (error) {
    console.error("❌ Error al actualizar lenguaje:", error);
    return res.status(500).json({ message: "Error al actualizar lenguaje", error: (error as Error).message });
  }
};

export const deleteLanguageController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedLanguage = await deleteLanguageService(id);

    console.log("✅ Lenguaje eliminado con éxito:", deletedLanguage);
    return res.status(200).json(deletedLanguage);
  } catch (error) {
    console.error("❌ Error al eliminar lenguaje:", error);
    return res.status(500).json({ message: "Error al eliminar lenguaje", error: (error as Error).message });
  }
};
