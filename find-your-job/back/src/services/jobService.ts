import { AppDataSource } from "../config/data-source";
import { JobDto } from "../dto/job.dto";
import { Category } from "../entities/Category";
import { Company } from "../entities/Company";
import { Job } from "../entities/Job";
import { User } from "../entities/User";

//Funcion para crear un job.
export const createJobService = async ( jobData: JobDto & { recruiterId: string; companyId: string }) => {
  const jobRepository = AppDataSource.getRepository(Job);
  const companyRepository = AppDataSource.getRepository(Company);
  const userRepository = AppDataSource.getRepository(User);

  const {
    title, description, location, category, salary,
    status, modality, type, vacancies, requirements, benefits,
    recruiterId, companyId
  } = jobData;

  // Buscar recruiter
  const recruiter = await userRepository.findOneBy({ id: recruiterId });
  if (!recruiter) throw new Error("Recruiter not found");

  // Buscar company
  const company = await companyRepository.findOneBy({ id: companyId });
  if (!company) throw new Error("Company not found");

  // Crear y guardar el job
  const newJob = jobRepository.create({
    title, description, location, category, salary,
    createdAt: new Date().toISOString(),
    status, modality, type, vacancies, requirements, benefits,
    recruiter,        // ✅ importante: asignamos recruiter
    company
  });

  await jobRepository.save(newJob);

  return newJob;
};

//Funcion para actualizar datos de un job.
export const updateJobService = async (jobId: string, data: any) => {
  const { recruiterId, category, companyId, ...fieldsToUpdate } = data;

  const jobRepository = AppDataSource.getRepository(Job);
  const companyRepository = AppDataSource.getRepository(Company);
  const categoryRepository = AppDataSource.getRepository(Category);

  const job = await jobRepository.findOne({
    where: { id: jobId },
    relations: ["recruiter", "company", "company.recruiter"],
  });
  if (!job) throw new Error("Job no encontrado");

  if (job.recruiter.id !== recruiterId)
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

//Funcion para eliminar un job.
export const deleteJobService = async (jobId: string, recruiterId: string) => {
  const jobRepository = AppDataSource.getRepository(Job);

  const job = await jobRepository.findOne({
    where: { id: jobId },
    relations: ["recruiter"]
  });

  if (!job) throw new Error("Job no encontrado");

  if (job.recruiter.id !== recruiterId)
    throw new Error("No autorizado para eliminar este job");

  await jobRepository.remove(job);

  return { message: "Job eliminado correctamente" };
};

//Funcion para obtener todos los jobs de una compañía
export const getJobsByCompanyService = async (companyId: string) => {
  const jobRepository = AppDataSource.getRepository(Job);

  return await jobRepository.find({
    where: { company: { id: companyId } },
    relations: ["recruiter", "company"],
  });
};
