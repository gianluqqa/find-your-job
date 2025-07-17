import { Request, Response, NextFunction } from "express";

export const validateCreateCertificate = (req: Request, res: Response, next: NextFunction) => {
  const { title, institution, graduationDate, userId } = req.body;

  if (!title || !institution || !graduationDate || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: title, institution, graduationDate o userId" });
  }

  next();
};

