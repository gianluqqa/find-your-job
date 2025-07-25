// middlewares/validateCreateCompany.ts
import { Request, Response, NextFunction } from "express";
import { CategoryDto } from "../dto/category.dto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

export const validateCreateCompany = async (req: Request, res: Response, next: NextFunction) => {
  const { name, category, userId } = req.body;

  if (!name || !category || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: name, category o userId" });
  }

  if (!Object.values(CategoryDto).includes(category)) {
    return res.status(400).json({ message: "La categoría no es válida" });
  }

  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ id: userId });

  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  if (user.role !== "recruiter") {
    return res.status(403).json({ message: "Solo usuarios con rol recruiter pueden crear compañías" });
  }

  next();
};
