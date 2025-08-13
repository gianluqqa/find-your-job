import { AppDataSource } from "../config/data-source";
import { Technology } from "../entities/Technology";

export const getAllTechnologiesService = async (): Promise<Technology[]> => {
  const technologyRepository = AppDataSource.getRepository(Technology);
  return await technologyRepository.find();
};
