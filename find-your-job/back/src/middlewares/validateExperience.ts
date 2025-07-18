import { Request, Response, NextFunction } from "express";
import { ExperienceDto } from "../dto/experience.dto";

export const validateExperience = (req: Request, res: Response, next: NextFunction) => {
  const { title, company, startDate, candidateId } = req.body as ExperienceDto;

  if (!title || !company || !startDate || !candidateId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: title, company, startDate o candidateId" });
  }

  next();
};

