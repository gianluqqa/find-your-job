import { Request, Response, NextFunction } from "express";
import { CategoryDto } from "../dto/category.dto";

export const validateCreateCompany = (req: Request, res: Response, next: NextFunction) => {
  const { name, category, recruiterId } = req.body;

  if (!name || !category || !recruiterId)
    return res.status(400).json({ message: "Faltan campos obligatorios: name, category o recruiterId" });

  if (!Object.values(CategoryDto).includes(category))
    return res.status(400).json({ message: "La categoría no es válida" });

  next();
};

