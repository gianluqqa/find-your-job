import { AppDataSource } from "../config/data-source";
import { Company } from "../entities/Company";
import { Category } from "../entities/Category";
import { CompanyDto } from "../dto/company.dto";
import { User } from "../entities/User";

//Funcion para crear una compañia.
export const createCompanyService = async ({ name, image, description, category, userId }: CompanyDto) => {
  const companyRepo = AppDataSource.getRepository(Company);
  const categoryRepo = AppDataSource.getRepository(Category);
  const userRepo = AppDataSource.getRepository(User);

  const foundCategory = await categoryRepo.findOneBy({ name: category as any });
  if (!foundCategory) throw new Error("Categoría no encontrada");

  const recruiter = await userRepo.findOneBy({ id: userId });
  if (!recruiter) throw new Error("Usuario no encontrado");
  if (recruiter.role !== "recruiter") throw new Error("Solo recruiter puede crear compañías");

  const newCompany = companyRepo.create({
    name,
    image,
    description,
    category: foundCategory,
    recruiter,
  });

  return await companyRepo.save(newCompany);
};

export const getAllCompaniesService = async () => {
  const companyRepository = AppDataSource.getRepository(Company);

  const companies = await companyRepository.find({
    relations: ["recruiter", "category", "jobs"],
  });

  if (!companies || companies.length === 0) {
    throw new Error("No se encontraron compañías");
  }

  return companies;
};

//Funcion para obtener una compañia especifica por ID.
export const getCompanyByIdService = async (id: string) => {
  const companyRepository = AppDataSource.getRepository(Company);

  const company = await companyRepository.findOne({
    where: { id },
    relations: ["recruiter", "category", "jobs"],
  });

  if (!company) {
    throw new Error("Compañía no encontrada");
  }

  return company;
};

export const getAllCompaniesByUserIdService = async (userId: string) => {
  const companyRepository = AppDataSource.getRepository(Company);

  const companies = await companyRepository.find({
    where: {
      recruiter: { id: userId }, // 🔹 clave, usar la relación
    },
    relations: ["category", "jobs", "recruiter"],
    order: { createdAt: "DESC" },
  });

  return companies;
};
