import { Request, Response, NextFunction } from "express";

export const validateCreateStudy = (req: Request, res: Response, next: NextFunction) => {
  const { userId, institution, degree, startDate } = req.body;

  if (!userId || !institution || !degree || !startDate) {
    return res.status(400).json({ message: "Faltan campos obligatorios: userId, institution, degree, startDate" });
  }

  next();
};
