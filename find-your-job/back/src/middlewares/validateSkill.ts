import { Request, Response, NextFunction } from "express";

export const validateCreateSkill = (req: Request, res: Response, next: NextFunction) => {
  const { userId, technologyName, customName } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "Falta userId" });
  }

  if (!technologyName && !customName) {
    return res.status(400).json({ message: "Debes enviar al menos technologyName o customName para crear la skill" });
  }

  next();
};
