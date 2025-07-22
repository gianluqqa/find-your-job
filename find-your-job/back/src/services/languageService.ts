import { AppDataSource } from "../config/data-source";
import { LanguageDto } from "../dto/language.dto";
import { Language } from "../entities/Language";
import { User } from "../entities/User";

export const createLanguageService = async (languageData: LanguageDto) => {
  const languageRepository = AppDataSource.getRepository(Language);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: languageData.userId });
  if (!user) throw new Error("Usuario no encontrado");

  const newLanguage = languageRepository.create({
    name: languageData.name,
    level: languageData.level,
    user: user,
  });

  await languageRepository.save(newLanguage);
  return newLanguage;
};

export const getAllLanguagesByUserService = async (userId: string) => {
  const languageRepository = AppDataSource.getRepository(Language); // Obtenemos el repositorio de la entidad Language, para poder hacer queries

  return await languageRepository.find({
    where: { user: { id: userId } }, // Buscámos todos los registros Language cuyo user.id sea igual a userId.
    relations: ["user"], // Incluyo en la respuesta la info del user relacionado (opcional, pero útil para ver datos del user)
  });
};

export const updateLanguageService = async (languageId: string, updateData: Partial<LanguageDto>) => {
  const languageRepository = AppDataSource.getRepository(Language);

  const language = await languageRepository.findOneBy({ id: languageId }); // Buscamos si existe el language que queremos actualizar usando su ID

  if (!language) {
    throw new Error("Language no encontrada");
  }
  Object.assign(language, updateData); // Actualizamos las propiedades del language con los nuevos datos que nos llegaron
  await languageRepository.save(language);

  return language;
};

export const deleteLanguageService = async (languageId: string) => {
  const languageRepository = AppDataSource.getRepository(Language);

  const language = await languageRepository.findOneBy({ id: languageId });

  if (!language) {
    throw new Error("Language no encontrada");
  }
  await languageRepository.remove(language);
  return { message: "Language eliminada correctamente" };
}