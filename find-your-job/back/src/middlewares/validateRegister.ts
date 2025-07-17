import { Request, Response, NextFunction } from "express";
import { RegisterDto } from "../dto/register.dto";

export function validateRegister(req: Request, res: Response, next: NextFunction) {
  const {
    name,
    email,
    password,
    confirmPassword,
    role,
    termsAccepted,
    country,
    state,
    city
  } = req.body as RegisterDto;

  if (!name || !email || !password || !confirmPassword || !country || !state || !city) {
    return res.status(400).json({ message: "Faltan campos obligatorios" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Las contraseñas no coinciden" });
  }

  if (!termsAccepted) {
    return res.status(400).json({ message: "Debes aceptar los términos" });
  }

  if (!role) {
    return res.status(400).json({ message: "El rol es obligatorio" });
  }

  if (!["candidate", "recruiter"].includes(role)) {
    return res.status(400).json({ message: "Rol inválido" });
  }

  next();
}
