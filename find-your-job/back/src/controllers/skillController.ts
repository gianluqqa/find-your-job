import { Request, Response } from "express";
import { createSkillService, deleteSkillService, getSkillsByUserService } from "../services/skillService";

export const createSkillController = async (req: Request, res: Response) => {
  try {
    const skillData = req.body;
    const newSkill = await createSkillService(skillData);
    console.log("✅ Skill creado:", newSkill);
    return res.status(201).json(newSkill);
  } catch (error) {
    console.error("❌ Error al crear skill:", error);
    return res.status(500).json({ message: "Error al crear skill", error: (error as Error).message });
  }
};

export const getSkillsByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const skills = await getSkillsByUserService(id);
    console.log("✅ Skills obtenidos:", skills);
    return res.status(200).json(skills);
  } catch (error) {
    console.error("❌ Error al obtener skills:", error);
    return res.status(500).json({ message: "Error al obtener skills", error: (error as Error).message });
  }
};


//Encargado de llamar la funcion para que unicamente el propietario pueda eliminar sus skills.
export const deleteSkillController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // id de la skill
    const { userId } = req.body; // id del usuario que quiere borrar

    const deletedSkill = await deleteSkillService(id, userId);
    console.log("✅ Skill eliminada con éxito:", deletedSkill);
    return res.status(200).json(deletedSkill);
  } catch (error) {
    console.error("❌ No tienes permisos para eliminar esta skill:", error);
    return res.status(500).json({ message: "Error al eliminar skill", error: (error as Error).message });
  }
};

