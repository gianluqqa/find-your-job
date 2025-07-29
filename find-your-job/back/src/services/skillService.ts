import { AppDataSource } from "../config/data-source";
import { SkillDto } from "../dto/skill.dto";
import { Skill } from "../entities/Skill";
import { Technology } from "../entities/Technology";
import { User } from "../entities/User";

//Funcion para crear un skill.
export const createSkillService = async (skillData: SkillDto) => {
  const skillRepository = AppDataSource.getRepository(Skill);
  const userRepository = AppDataSource.getRepository(User);
  const technologyRepository = AppDataSource.getRepository(Technology);

  // Buscamos el user owner
  const user = await userRepository.findOneBy({ id: skillData.userId });
  if (!user) throw new Error("Usuario no encontrado");

  let technology: Technology | undefined = undefined;

  if (skillData.technologyName) {
    const foundTechnology = await technologyRepository.findOneBy({ name: skillData.technologyName });
    if (!foundTechnology) throw new Error("Tecnología no encontrada");
    technology = foundTechnology;
  }

  // Creamos la skill: puede tener technology o customName o ambos
  const newSkill = skillRepository.create({
    user: user,
    technology: technology,
    customName: skillData.customName,
  });

  await skillRepository.save(newSkill);

  return newSkill;
};

//Funcion para obtener todos los skills de un user.
export const getSkillsByUserService = async (userId: string) => {
  const skillRepository = AppDataSource.getRepository(Skill);

  return await skillRepository.find({
    where: { user: { id: userId } },
    relations: ["user"],
  });
};

//Funcion para eliminar una skill.
export const deleteSkillService = async (skillId: string, userId: string) => {
  const skillRepository = AppDataSource.getRepository(Skill);

  // Buscamos la skill junto con su propietario
  const skill = await skillRepository.findOne({
    where: { id: skillId },
    relations: ["user"],
  });

  if (!skill) throw new Error("Skill no encontrada");

  // Verificamos que el propietario coincida
  if (skill.user.id !== userId) {
    throw new Error("No autorizado para eliminar esta skill");
  }

  await skillRepository.remove(skill);
  return { message: "Skill eliminada correctamente" };
};
