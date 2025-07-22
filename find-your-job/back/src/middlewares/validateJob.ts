import { Request, Response, NextFunction } from "express";
import { CategoryDto } from "../dto/category.dto";

export const validateCreateJob = (req: Request, res: Response, next: NextFunction) => {
  const {
    title, description, location, category, status, modality, type, companyId, recruiterId
  } = req.body;

  if (!title || !description || !location || !category || !status || !modality || !type || !companyId || !recruiterId) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  if (!Object.values(CategoryDto).includes(category)) {
    return res.status(400).json({ message: "La categoría no es válida" });
  }

  const validStatus = ["Active", "Expired", "Urgent"];
  if (!validStatus.includes(status)) {
    return res.status(400).json({ message: "El status no es válido" });
  }

  const validModality = ["On-site", "Remote", "Hybrid"];
  if (!validModality.includes(modality)) {
    return res.status(400).json({ message: "La modalidad no es válida" });
  }

  const validType = ["Full-Time", "Part-Time", "Freelance", "Internship", "Temporary"];
  if (!validType.includes(type)) {
    return res.status(400).json({ message: "El tipo no es válido" });
  }

  next();
};

export const validateUpdateJob = (req: Request, res: Response, next: NextFunction) => {
  const { recruiterId, title, description, location, category, status, modality, type, companyId } = req.body;

  if (!recruiterId) return res.status(400).json({ message: "El recruiterId es obligatorio" });

  if (category && !Object.values(CategoryDto).includes(category)) {
    return res.status(400).json({ message: "La categoría no es válida" });
  }

  const validStatus = ["Active", "Expired", "Urgent"];
  if (status && !validStatus.includes(status)) {
    return res.status(400).json({ message: "El status no es válido" });
  }

  const validModality = ["On-site", "Remote", "Hybrid"];
  if (modality && !validModality.includes(modality)) {
    return res.status(400).json({ message: "La modalidad no es válida" });
  }

  const validType = ["Full-Time", "Part-Time", "Freelance", "Internship", "Temporary"];
  if (type && !validType.includes(type)) {
    return res.status(400).json({ message: "El tipo no es válido" });
  }

  next();
};