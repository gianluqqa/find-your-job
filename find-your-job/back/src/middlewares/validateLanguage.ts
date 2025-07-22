import { Request, Response, NextFunction } from "express";

export const validateCreateLanguage = (req: Request, res: Response, next: NextFunction) => {
  const { name, level, userId } = req.body;

  // Verificamos que los campos obligatorios existan
  if (!name || !level || !userId) {
    return res.status(400).json({ message: "Faltan campos obligatorios: name, level o userId" });
  }

  // Validamos que el nivel sea uno de los permitidos
  const validLevels = ["basic", "intermediate", "advanced", "native"];
  if (!validLevels.includes(level)) {
    return res.status(400).json({ message: "El nivel no es válido. Debe ser: basic, intermediate, advanced o native" });
  }

  // Si todo está bien, pasamos al siguiente middleware o controller
  next();
};
