import { AppDataSource } from "../config/data-source";
import { SkillDto } from "../dto/skill.dto";
import { Skill } from "../entities/Skill";
import { User } from "../entities/User";

export const createSkillService = async (skillData: SkillDto) => {
  const skillRepository = AppDataSource.getRepository(Skill);
  const userRepository = AppDataSource.getRepository(User);

  // Verificamos que exista el user
  const user = await userRepository.findOneBy({ id: skillData.userId });
  if (!user) throw new Error("Usuario no encontrado");

  // Creamos la skill asociada al user
  const newSkill = skillRepository.create({
    name: skillData.name,
    user: user,
  });

  await skillRepository.save(newSkill);
  return newSkill;
};

export const getSkillsByUserService = async (userId: string) => {
  const skillRepository = AppDataSource.getRepository(Skill);

  return await skillRepository.find({
    where: { user: { id: userId } },
    relations: ["user"],
  });
};

export const deleteSkillService = async (skillId: string, userId: string) => {
  const skillRepository = AppDataSource.getRepository(Skill);

  // Buscamos la skill junto con su propietario
  const skill = await skillRepository.findOne({
    where: { id: skillId },
    relations: ["user"]
  });

  if (!skill) throw new Error("Skill no encontrada");

  // Verificamos que el propietario coincida
  if (skill.user.id !== userId) {
    throw new Error("No autorizado para eliminar esta skill");
  }

  await skillRepository.remove(skill);
  return { message: "Skill eliminada correctamente" };
}

