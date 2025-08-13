import { ITechnology } from "./ITechnology";

export interface ISkill {
  id?: string;
  customName?: string | null;
  technology?: ITechnology | null;  // Aquí va el objeto completo de tecnología
  userId: string;
}

export interface ISkillCreate {
  userId: string;
  customName?: string;
  technologyId?: string;
}
