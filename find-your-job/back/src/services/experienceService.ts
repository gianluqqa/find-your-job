import { AppDataSource } from "../config/data-source";
import { Experience } from "../entities/Experience";
import { User } from "../entities/User";
import { ExperienceDto } from "../dto/experience.dto";

export const createExperienceService = async (experienceData: ExperienceDto & { userId: string }) => {
  const experienceRepository = AppDataSource.getRepository(Experience);
  const userRepository = AppDataSource.getRepository(User);

  // Buscamos al usuario (que debe ser candidate)
  const user = await userRepository.findOneBy({ id: experienceData.userId });
  if (!user) throw new Error("Usuario no encontrado");
  if (user.role !== "candidate") throw new Error("Solo usuarios con rol candidate pueden crear experiencias");

  const newExperience = experienceRepository.create({
    title: experienceData.title,
    company: experienceData.company,
    startDate: new Date(experienceData.startDate),
    endDate: experienceData.endDate ? new Date(experienceData.endDate) : undefined,
    description: experienceData.description,
    location: experienceData.location,
    user: user,
  });

  await experienceRepository.save(newExperience);

  const savedExperience = await experienceRepository.findOne({
    where: { id: newExperience.id },
    relations: ["user"],
  });

  return savedExperience;
};

export const getExperiencesByCandidateIdService = async (candidateId: string) => {
  const experienceRepository = AppDataSource.getRepository(Experience);

  const experiences = await experienceRepository.find({
    where: { user: { id: candidateId } },
  });

  return experiences;
};

export const deleteExperienceService = async (experienceId: string, userId: string) => {
  const experienceRepository = AppDataSource.getRepository(Experience);
  const userRepository = AppDataSource.getRepository(User);

  // 1️⃣ Buscar experiencia con su user
  const experience = await experienceRepository.findOne({
    where: { id: experienceId },
    relations: ["user"],
  });
  if (!experience) throw new Error("Experiencia no encontrada");

  // 2️⃣ Buscar user en la base (para verificar el rol)
  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");
  if (user.role !== "candidate") throw new Error("Solo usuarios con rol 'candidate' pueden eliminar experiencias");

  // 3️⃣ Verificar que sea el dueño
  if (experience.user.id !== userId) throw new Error("No autorizado para eliminar esta experiencia");

  // 4️⃣ Eliminar
  await experienceRepository.remove(experience);

  return { message: "Experiencia eliminada correctamente" };
};

export const updateExperienceService = async (experienceId: string, userId: string, updateData: Partial<ExperienceDto>) => {
  const experienceRepository = AppDataSource.getRepository(Experience);
  const userRepository = AppDataSource.getRepository(User);

  const experience = await experienceRepository.findOne({
    where: { id: experienceId },
    relations: ["user"],
  });
  if (!experience) throw new Error("Experiencia no encontrada");

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");
  if (user.role !== "candidate") throw new Error("Solo usuarios con rol 'candidate' pueden actualizar experiencias");

  if (experience.user.id !== userId) {
    throw new Error("No tienes permisos para actualizar esta experiencia");
  }

  experience.title = updateData.title ?? experience.title;
  experience.company = updateData.company ?? experience.company;
  experience.startDate = updateData.startDate ? new Date(updateData.startDate) : experience.startDate;
  experience.endDate = updateData.endDate ? new Date(updateData.endDate) : experience.endDate;
  experience.description = updateData.description ?? experience.description;
  experience.location = updateData.location ?? experience.location;

  await experienceRepository.save(experience);

  // 👇 Vuelvo a buscar con las relaciones para que el controller lo reciba completo
  const updated = await experienceRepository.findOne({
    where: { id: experience.id },
    relations: ["user"],
  });

  return updated;
};


