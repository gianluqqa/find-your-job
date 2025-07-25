import { AppDataSource } from "../config/data-source";
import { Study } from "../entities/Study";
import { User } from "../entities/User";
import { StudyDto } from "../dto/study.dto";

//Funcion para crear un study.
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

//Funcion para obtener todos los studies de un user.
export const getStudiesByUserService = async (userId: string) => {
  const studyRepository = AppDataSource.getRepository(Study);

  const studies = await studyRepository.find({
    where: { user: { id: userId } },
    relations: ["user"],
  });

  return studies;
};

//Funcion para eliminar un study.
export const deleteStudyService = async (studyId: string, userId: string) => {
  const studyRepository = AppDataSource.getRepository(Study);

  const study = await studyRepository.findOne({
    where: { id: studyId },
    relations: ["user"],
  });

  if (!study) throw new Error("Study no encontrado");

  if (study.user.id !== userId) {
    throw new Error("No autorizado para eliminar este study");
  }

  await studyRepository.remove(study);
  return { message: "Study eliminado correctamente" };
};

//Funcion para actualizar un study.
export const updateStudyService = async (studyId: string, userId: string, studyData: Partial<StudyDto>) => {
  const studyRepository = AppDataSource.getRepository(Study);

  const study = await studyRepository.findOne({
    where: { id: studyId },
    relations: ["user"],
  });

  if (!study) throw new Error("Study no encontrado");

  if (study.user.id !== userId) throw new Error("No autorizado para actualizar este study");

  // Actualizamos solo las propiedades que vengan en studyData
  Object.assign(study, studyData);

  await studyRepository.save(study);

  return study;
};
