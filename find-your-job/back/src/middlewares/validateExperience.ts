import { Request, Response, NextFunction } from "express";

export const validateCreateExperience = (req: Request, res: Response, next: NextFunction) => {
  const { title, company, startDate, userId } = req.body;

  if (!title || !company || !startDate || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: title, company, startDate o userId" });
  }

  next();
};
