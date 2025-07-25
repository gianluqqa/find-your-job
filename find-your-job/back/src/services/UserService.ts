import { RegisterDto } from "./../dto/register.dto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

//Funcion para crear un usuario.
export const createUserService = async (registerData: RegisterDto) => {
  const userRepo = AppDataSource.getRepository(User);

  // Chequear si el email ya existe
  const existingUser = await userRepo.findOne({ where: { email: registerData.email } });
  if (existingUser) {
    throw new Error("El email ya está registrado");
  }

  // Crear user (solo los campos que existen en la entidad)
  const newUser = userRepo.create({
    name: registerData.name,
    email: registerData.email,
    password: registerData.password,
    role: registerData.role || "candidate",
    country: registerData.country,
    state: registerData.state,
    city: registerData.city,
    phone: registerData.phone,
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

//Funcion para obtener usuario por ID.
export const getUserByIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  return await userRepository.findOne({ where: { id } });
};

//Funcion para iniciar sesión.
export const loginService = async (email: string, password: string) => {
  const userRepository = AppDataSource.getRepository(User);

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
};
