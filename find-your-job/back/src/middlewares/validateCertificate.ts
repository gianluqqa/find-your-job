import { Request, Response, NextFunction } from "express";

export const validateCreateCertificate = (req: Request, res: Response, next: NextFunction) => {
  const { title, institution, graduationDate, userId } = req.body;

  if (!title || !institution || !graduationDate || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: title, institution, graduationDate o userId" });
  }

  next();
};

export const validateUpdateCertificate = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "El userId del dueño es obligatorio para actualizar el certificado" });
  }

  next();
};

export const validateDeleteCertificate = (req: Request, res: Response, next: NextFunction) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "El userId del dueño es obligatorio para eliminar el certificado" });
  }

  next();
};