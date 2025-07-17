import "reflect-metadata";
import { AppDataSource } from "../config/data-source";
import { Category } from "../entities/Category";
import { CategoryDto } from "../dto/category.dto";

const seedCategories = async () => {
  try {
    await AppDataSource.initialize();
    const categoryRepository = AppDataSource.getRepository(Category);

    for (const categoryName of Object.values(CategoryDto)) {
      const exists = await categoryRepository.findOneBy({ name: categoryName as CategoryDto });
      if (!exists) {
        const newCategory = categoryRepository.create({ name: categoryName as CategoryDto });
        await categoryRepository.save(newCategory);
        console.log("✅ Categoría creada:", categoryName);
      } else {
        console.log("ℹ️ Categoría ya existe:", categoryName);
      }
    }

    console.log("✅ Seeding de categorías completado");
    await AppDataSource.destroy();
  } catch (error) {
    console.error("❌ Error al seedear categorías:", error);
    await AppDataSource.destroy();
  }
};

seedCategories();
