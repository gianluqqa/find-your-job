import { AppDataSource } from "../config/data-source";
import { Company } from "../entities/Company";
import { Category } from "../entities/Category";
import { CompanyDto } from "../dto/company.dto";
import { User } from "../entities/User";

//Funcion para crear una compañia.
export const createCompanyService = async ({ name, image, description, category, recruiterId }: CompanyDto) => {
  const companyRepo = AppDataSource.getRepository(Company);
  const categoryRepo = AppDataSource.getRepository(Category);
  const userRepo = AppDataSource.getRepository(User);

  const foundCategory = await categoryRepo.findOneBy({ name: category as any });
  if (!foundCategory) throw new Error("Categoría no encontrada");

  const recruiter = await userRepo.findOneBy({ id: recruiterId });
  if (!recruiter) throw new Error("Recruiter no encontrado");

  const newCompany = companyRepo.create({ name, image, description, category: foundCategory, recruiter });
  return await companyRepo.save(newCompany);
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
