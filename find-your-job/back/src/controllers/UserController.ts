import { Request, Response } from "express";
import { createUserService, getAllUsersService, getUserByIdService, loginService } from "../services/userService";

// Encargado de ejecutar la funcion para crear un usuario.
export const registerUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUserService(req.body);

    // Limitar la información que devuelve el usuario.
    const userResponse = {
      id: newUser.id,
      name: newUser.name,
      role: newUser.role,
      status: newUser.status,
      createdAt: newUser.createdAt ?? null,
    };

    res.status(201).json(userResponse);
  } catch (error: any) {
    console.error("Error al registrar usuario:", error);
    res.status(400).json({ message: error.message || "Error interno del servidor" });
  }
};

// Encargado de ejecutar la funcion para obtener todos los usuarios.
export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsersService();

    // Mapear para filtrar solo campos permitidos
    const filteredUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
    }));

    res.json(filteredUsers);
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

    // Mapear para filtrar campos sensibles
    const filteredUser = {
      id: user.id,
      name: user.name,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
    };

    console.log("✅ Usuario obtenido con éxito:", filteredUser);
    return res.status(200).json(filteredUser);
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
      return res.status(401).json({ message: "Email o contraseña incorrectos" });
    }

    // Limitar la información devuelta solo a lo estrictamente necesario
    const userResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      createdAt: user.createdAt,
    };

    return res.json({ message: "Inicio de sesión exitoso", user: userResponse });
  } catch (error) {
    console.error("loginController: Error en el servidor durante el inicio de sesión:", error);
    return res.status(500).json({ message: "Error en el servidor durante el inicio de sesión" });
  }
};
