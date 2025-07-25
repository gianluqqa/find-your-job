import { AppDataSource } from "../config/data-source";
import { AptitudeDto } from "../dto/aptitude.dto";
import { Aptitude } from "../entities/Aptitude";
import { User } from "../entities/User";

export const createAptitudeService = async (aptitudeData: AptitudeDto) => {
  const aptitudeRepository = AppDataSource.getRepository(Aptitude);
  const userRepository = AppDataSource.getRepository(User);

  // Buscamos al user por su ID .
  const user = await userRepository.findOneBy({ id: aptitudeData.userId });
  if (!user) throw new Error("Usuario (candidate) no encontrado");

  // Creamos la nueva aptitude asociada al user
  const newAptitude = aptitudeRepository.create({
    name: aptitudeData.name,
    level: aptitudeData.level,
    user: user,
  });

  await aptitudeRepository.save(newAptitude);

  return newAptitude;
};

export const getAptitudesByUserService = async (userId: string) => {
  const aptitudeRepository = AppDataSource.getRepository(Aptitude);
  return await aptitudeRepository.find({
    where: { user: { id: userId } },
    relations: ["user"],
  });
};

export const deleteAptitudeService = async (aptitudeId: string, userId: string) => {
  const aptitudeRepository = AppDataSource.getRepository(Aptitude);
  const aptitude = await aptitudeRepository.findOne({
    where: { id: aptitudeId },
    relations: ["user"],
  });

  if (!aptitude) {
    throw new Error("Aptitude no encontrada");
  }

  if (aptitude.user.id !== userId) {
    throw new Error("No autorizado para eliminar esta aptitude");
  }
  await aptitudeRepository.remove(aptitude);
  return { message: "Aptitude eliminada correctamente" };
};

export const updateAptitudeService = async (aptitudeId: string, updateData: Partial<AptitudeDto>) => {
  const aptitudeRepository = AppDataSource.getRepository(Aptitude);

  const aptitude = await aptitudeRepository.findOneBy({ id: aptitudeId });

  if (!aptitude) throw new Error("Aptitude no encontrada");

  Object.assign(aptitude, updateData);

  await aptitudeRepository.save(aptitude);
  return aptitude;
};
