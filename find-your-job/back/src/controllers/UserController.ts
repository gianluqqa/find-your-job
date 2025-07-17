import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService, loginService } from "../services/userService";

// Encargado de ejecutar la funcion para crear un usuario.
export const registerUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUserService(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Encargado de ejecutar la funcion para obtener todos los usuarios.
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users" });
  }
};

// Encargado de ejecutar la funcion para obtener un usuario por ID.
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    console.log("✅ Usuario obtenido con éxito:", user);
    return res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error al obtener usuario por ID:", error);
    return res.status(500).json({ message: "Error al obtener usuario", error: (error as Error).message });
  }
};


// Encargado de ejecutar la funcion para iniciar sesión.
export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email, password);

    if (!user) {
      console.log(`loginController: Falló inicio de sesión para email: ${email}`);
      return res.status(401).json({ message: "Email o contraseña incorrectos" });
    }

    console.log(`loginController: Inicio de sesión exitoso para email: ${email}`);
    return res.json({ message: "Inicio de sesión exitoso", user });
  } catch (error) {
    console.error("loginController: Error en el servidor durante el inicio de sesión:", error);
    return res.status(500).json({ message: "Error en el servidor durante el inicio de sesión" });
  }
};