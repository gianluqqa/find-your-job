import { AppDataSource } from "../config/data-source";
import { Company } from "../entities/Company";
import { Category } from "../entities/Category";
import { CompanyDto } from "../dto/company.dto";

//Funcion para crear una compañia.
export const createCompanyService = async (companyData: CompanyDto) => {
  const { name, image, description, category } = companyData;

  const companyRepository = AppDataSource.getRepository(Company);
  const categoryRepository = AppDataSource.getRepository(Category);

  console.log("🔎 Buscando categoría en la base:", category);
  const foundCategory = await categoryRepository.findOneBy({ name: category as any });

  if (!foundCategory) {
    console.log("❌ Categoría no encontrada:", category);
    throw new Error("Categoría no encontrada");
  }

  const newCompany = companyRepository.create({
    name,
    image,
    description,
    category: foundCategory
  });

  console.log("💾 Guardando nueva compañía...");
  await companyRepository.save(newCompany);
  console.log("✅ Compañía creada con éxito:", newCompany);

  return newCompany;
};

//Funcion para obtener todas las compañías.
export const getAllCompaniesService = async () => {
  const companyRepository = AppDataSource.getRepository(Company);
 return await companyRepository.find();
}

//Funcion para obtener una compañia especifica por ID.
export const getCompanyByIdService = async (id: string) => {
  const companyRepository = AppDataSource.getRepository(Company);

  const company = await companyRepository.findOne({
    where: { id },
    relations: ["category", "jobs"], // Relaciones cargadas.
  });

  if (!company) {
    throw new Error("Compañía no encontrada");
  }

  return company;
};
