import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

//Funcion para crear un usuario.
export const createUserService = async (data: any) => {
  const userRepo = AppDataSource.getRepository(User);

  // Chequear si el email ya existe
  const existingUser = await userRepo.findOne({ where: { email: data.email } });
  if (existingUser) throw new Error("El email ya está registrado");

  // Crear usuario
  const newUser = userRepo.create({
    name: data.name,
    email: data.email,
    password: data.password, 
    role: data.role || "candidate",
    country: data.country,
    state: data.state,
    city: data.city,
    phone: data.phone,
    about: data.about,
    status: "active",
  });

  await userRepo.save(newUser);
  return newUser;
};

//Funcion para obtener todos los usuarios.
export const getAllUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.find();
};

export const loginService = async (email: string, password: string) => {
  const userRepository = AppDataSource.getRepository(User);

  try {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      console.log(`loginService: No se encontró usuario con email: ${email}`);
      return null;
    }

    if (user.password !== password) {
      console.log(`loginService: Contraseña incorrecta para el usuario: ${email}`);
      return null;
    }

    console.log(`loginService: Usuario ${email} autenticado correctamente`);
    return user;
  } catch (error) {
    console.log("loginService: Error al buscar usuario", error);
    throw error;
  }
};