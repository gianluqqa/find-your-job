import { AppDataSource } from "../config/data-source";
import { Category } from "../entities/Category";

export const getAllCategoriesService = async (): Promise<Category[]> => {
  const categoryRepository = AppDataSource.getRepository(Category);
  return await categoryRepository.find();
};
