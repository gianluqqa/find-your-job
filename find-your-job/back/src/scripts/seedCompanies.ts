import "reflect-metadata";
import { AppDataSource } from "../config/data-source";
import { Company } from "../entities/Company";
import { CategoryDto } from "../dto/category.dto";

const seedCompanies = async () => {
  try {
    await AppDataSource.initialize();
    const companyRepository = AppDataSource.getRepository(Company);

    for (const companyName of Object.values(CategoryDto)) {
      const exists = await companyRepository.findOneBy({ name: companyName as CategoryDto });
      if (!exists) {
        const newCompany = companyRepository.create({ name: companyName as CategoryDto });
        await companyRepository.save(newCompany);
        console.log("✅ Company creada:", companyName);
      } else {
        console.log("ℹ️ Company ya existe:", companyName);
      }
    }
    console.log("✅ Seeding de companies completado");
    await AppDataSource.destroy();
  } catch (error) {
    console.error("❌ Error al seedear companies:", error);
    await AppDataSource.destroy();
  }
};

seedCompanies();
