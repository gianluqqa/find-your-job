import { Request, Response, NextFunction } from "express";
import { ILogin } from "../interfaces/ILogin";

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as ILogin;

  if (!email || typeof email !== "string") {
    console.log("Validación: Email inválido o no enviado");
    return res.status(400).json({ message: "El email es obligatorio y debe ser una cadena de texto" });
  }

  if (!password || typeof password !== "string") {
    console.log("Validación: Contraseña inválida o no enviada");
    return res.status(400).json({ message: "La contraseña es obligatoria y debe ser una cadena de texto" });
  }

  next();
};
