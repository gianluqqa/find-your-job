import { Request, Response } from "express";
import { getAllCategoriesService } from "../services/categoryService";

export const getAllCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await getAllCategoriesService();
    return res.status(200).json(categories);
  } catch (error) {
    console.error("❌ Error al obtener todas las categorías:", error);
    return res.status(500).json({ message: "Error al obtener todas las categorías" });
  }
};
