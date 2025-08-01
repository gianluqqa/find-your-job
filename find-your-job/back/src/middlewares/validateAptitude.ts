import { Request, Response, NextFunction } from "express";

export const validateCreateAptitude = (req: Request, res: Response, next: NextFunction) => {
  const { name, userId } = req.body;

  if (!name || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: name y candidateId" });
  }

  next();
};
