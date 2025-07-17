import { AppDataSource } from "../config/data-source";
import { Study } from "../entities/Study";
import { User } from "../entities/User";
import { StudyDto } from "../dto/study.dto";

export const createStudyService = async (studyData: StudyDto, userId: string) => {
  const studyRepository = AppDataSource.getRepository(Study);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");

  const newStudy = studyRepository.create({
    institution: studyData.institution,
    degree: studyData.degree,
    field: studyData.field,
    startDate: new Date(studyData.startDate),
    endDate: studyData.endDate ? new Date(studyData.endDate) : undefined,
    description: studyData.description,
    user: user,
  });

  await studyRepository.save(newStudy);

  return newStudy;
};
