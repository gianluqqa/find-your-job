import { Request, Response, NextFunction } from "express";
import { CategoryDto } from "../dto/category.dto";

export const validateCreateCompany = (req: Request, res: Response, next: NextFunction) => {
  const { name, category } = req.body;

  if (!name || !category) {
    console.log("⚠️ Faltan campos obligatorios: name o category");
    return res.status(400).json({ message: "El nombre y la categoría son obligatorios" });
  }

  if (!Object.values(CategoryDto).includes(category)) {
    console.log("⚠️ Categoría inválida recibida:", category);
    return res.status(400).json({ message: "La categoría no es válida" });
  }

  next();
};
