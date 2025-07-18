import { AppDataSource } from "../config/data-source";
import { Experience } from "../entities/Experience";
import { User } from "../entities/User";
import { ExperienceDto } from "../dto/experience.dto";

export const createExperienceService = async (experienceData: ExperienceDto) => {
  const experienceRepository = AppDataSource.getRepository(Experience);
  const userRepository = AppDataSource.getRepository(User);

  // Buscamos al candidate (que es un user)
  const candidate = await userRepository.findOneBy({ id: experienceData.candidateId });
  if (!candidate) throw new Error("Usuario (candidato) no encontrado");

  const newExperience = experienceRepository.create({
    title: experienceData.title,
    company: experienceData.company,
    startDate: new Date(experienceData.startDate),
    endDate: experienceData.endDate ? new Date(experienceData.endDate) : undefined,
    description: experienceData.description,
    location: experienceData.location,
    user: candidate
  });

  await experienceRepository.save(newExperience);
  return newExperience;
};

export const getExperiencesByCandidateIdService = async (candidateId: string) => {
  const experienceRepository = AppDataSource.getRepository(Experience);

  const experiences = await experienceRepository.find({
    where: { user: { id: candidateId } },
  });

  return experiences;
};

export const deleteExperienceService = async (experienceId: string, candidateId: string) => {
  const experienceRepository = AppDataSource.getRepository(Experience);

  const experience = await experienceRepository.findOne({
    where: { id: experienceId },
    relations: ["user"],
  });

  if (!experience) throw new Error("Experience no encontrada");

  if (experience.user.id !== candidateId)
    throw new Error("No autorizado para eliminar esta experiencia");

  await experienceRepository.remove(experience);

  return { message: "Experience eliminada correctamente" };
}