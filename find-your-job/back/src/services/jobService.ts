import { AppDataSource } from "../config/data-source";
import { JobDto } from "../dto/job.dto";
import { Category } from "../entities/Category";
import { Company } from "../entities/Company";
import { Job } from "../entities/Job";
import { User } from "../entities/User";

export const createJobService = async (
  jobData: JobDto & { recruiterId: string; companyId: string }
) => {
  const jobRepository = AppDataSource.getRepository(Job);
  const companyRepository = AppDataSource.getRepository(Company);
  const userRepository = AppDataSource.getRepository(User);

  const {
    title,
    description,
    location,
    category,
    salary,
    status,
    modality,
    type,
    vacancies,
    requirements,
    benefits,
    recruiterId,
    companyId,
  } = jobData;

  const company = await companyRepository.findOneBy({ id: companyId });
  if (!company) throw new Error("Company not found");

  const recruiter = await userRepository.findOneBy({ id: recruiterId });
  if (!recruiter) throw new Error("Recruiter not found");

  const newJob = jobRepository.create({
    title,
    description,
    location,
    category,
    salary,
    createdAt: new Date().toISOString(),
    status,
    modality,
    type,
    vacancies,
    requirements,
    benefits,
    company,
    recruiter,
  });

  await jobRepository.save(newJob);

  return newJob;
};

export const updateJobService = async (jobId: string, data: any) => {
  const { recruiterId, category, companyId, ...fieldsToUpdate } = data;

  const jobRepository = AppDataSource.getRepository(Job);
  const companyRepository = AppDataSource.getRepository(Company);
  const categoryRepository = AppDataSource.getRepository(Category);

  const job = await jobRepository.findOne({
    where: { id: jobId },
    relations: ["company", "company.recruiter"],
  });

  if (!job) throw new Error("Job no encontrado");

  if (job.company.recruiter.id !== recruiterId)
    throw new Error("No autorizado");

  if (category) {
    const foundCategory = await categoryRepository.findOneBy({
      name: category as any,
    });
    if (!foundCategory) throw new Error("Categoría no encontrada");
    job.category = foundCategory.name as any;
  }

  if (companyId) {
    const foundCompany = await companyRepository.findOne({
      where: { id: companyId },
      relations: { recruiter: true },
    });
    if (!foundCompany) throw new Error("Compañía no encontrada");
    if (foundCompany.recruiter.id !== recruiterId)
      throw new Error("No autorizado para cambiar a esta compañía");
    job.company = foundCompany;
  }

  Object.assign(job, fieldsToUpdate);
  await jobRepository.save(job);

  return job;
};
