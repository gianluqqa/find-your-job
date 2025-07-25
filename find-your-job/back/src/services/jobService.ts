import { AppDataSource } from "../config/data-source";
import { JobDto } from "../dto/job.dto";
import { Category } from "../entities/Category";
import { Company } from "../entities/Company";
import { Job } from "../entities/Job";
import { User } from "../entities/User";

//Funcion para crear un job.
export const createJobService = async (jobData: JobDto & { userId: string; companyId: string }) => {
  const userRepo = AppDataSource.getRepository(User);
  const companyRepo = AppDataSource.getRepository(Company);
  const jobRepo = AppDataSource.getRepository(Job);

  // 1️⃣ Buscar user
  const user = await userRepo.findOneBy({ id: jobData.userId });
  if (!user) throw new Error("Usuario no encontrado");
  if (user.role !== "recruiter") throw new Error("Solo recruiters pueden crear jobs");

  // 2️⃣ Buscar company
  const company = await companyRepo.findOneBy({ id: jobData.companyId });
  if (!company) throw new Error("Company no encontrada");

  // 3️⃣ Crear y guardar job
  const newJob = jobRepo.create({
    title: jobData.title,
    description: jobData.description,
    location: jobData.location,
    category: jobData.category, // solo el name, o puedes buscarla si quieres
    salary: jobData.salary,
    status: jobData.status,
    modality: jobData.modality,
    type: jobData.type,
    vacancies: jobData.vacancies,
    requirements: jobData.requirements,
    benefits: jobData.benefits,
    createdAt: new Date().toISOString(),
    recruiter: user, // asigna el recruiter
    company, // asigna la company
  });

  await jobRepo.save(newJob);
  return newJob;
};

//Funcion para actualizar datos de un job.
export const updateJobService = async (jobId: string, data: any) => {
  const { userId, category, companyId, ...fieldsToUpdate } = data;

  const userRepo = AppDataSource.getRepository(User);
  const companyRepo = AppDataSource.getRepository(Company);
  const categoryRepo = AppDataSource.getRepository(Category);
  const jobRepo = AppDataSource.getRepository(Job);

  const user = await userRepo.findOneBy({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");
  if (user.role !== "recruiter") throw new Error("Solo recruiters pueden actualizar jobs");

  const job = await jobRepo.findOne({
    where: { id: jobId },
    relations: ["recruiter", "company", "company.recruiter"],
  });
  if (!job) throw new Error("Job no encontrado");

  if (job.recruiter.id !== userId) throw new Error("No autorizado para actualizar este job");

  if (category) {
    const foundCategory = await categoryRepo.findOneBy({
      name: category as any,
    });
    if (!foundCategory) throw new Error("Categoría no encontrada");
    job.category = foundCategory.name as any;
  }

  if (companyId) {
    const foundCompany = await companyRepo.findOne({
      where: { id: companyId },
      relations: { recruiter: true },
    });
    if (!foundCompany) throw new Error("Compañía no encontrada");
    if (foundCompany.recruiter.id !== userId) throw new Error("No autorizado para cambiar a esta compañía");
    job.company = foundCompany;
  }

  Object.assign(job, fieldsToUpdate);
  await jobRepo.save(job);

  return job;
};

//Funcion para eliminar un job.
export const deleteJobService = async (jobId: string, userId: string) => {
  const jobRepository = AppDataSource.getRepository(Job);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userId });
  if (!user) throw new Error("Usuario no encontrado");
  if (user.role !== "recruiter") throw new Error("Solo recruiters pueden eliminar jobs");

  const job = await jobRepository.findOne({
    where: { id: jobId },
    relations: ["recruiter"],
  });
  if (!job) throw new Error("Job no encontrado");

  if (job.recruiter.id !== userId) throw new Error("No autorizado para eliminar este job");

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

export const getAllJobsService = async () => {
  const jobRepository = AppDataSource.getRepository(Job);

  const jobs = await jobRepository.find({
    relations: ["recruiter", "company"],
  });

  return jobs;
};
