import { Request, Response } from "express";
import { createJobService, deleteJobService, getAllJobsService, getJobsByCompanyService, getJobsByRecruiterService, updateJobService } from "../services/jobService";

//Controlador que maneja la funcion para crear un job.
export const createJobController = async (req: Request, res: Response) => {
  try {
    const newJob = await createJobService(req.body);

    const filteredJob = {
      ...newJob, // todas las propiedades originales
      recruiter: newJob.recruiter && {
        id: newJob.recruiter.id,
        name: newJob.recruiter.name,
        email: newJob.recruiter.email,
        role: newJob.recruiter.role,
      },
      company: newJob.company && {
        id: newJob.company.id,
        name: newJob.company.name,
      },
    };

    res.status(201).json(filteredJob);
  } catch (error) {
    console.error("❌ Error al crear job:", error);
    res.status(500).json({ message: "Error al crear job", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para actualizar un job.
export const updateJobController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedJob = await updateJobService(id, req.body);

    const filteredJob = {
      ...updatedJob, // mantenemos todas las props originales
      recruiter: updatedJob.recruiter && {
        id: updatedJob.recruiter.id,
        name: updatedJob.recruiter.name,
        email: updatedJob.recruiter.email,
        role: updatedJob.recruiter.role,
      },
      company: updatedJob.company && {
        id: updatedJob.company.id,
        name: updatedJob.company.name,
      },
    };

    return res.status(200).json(filteredJob);
  } catch (error) {
    console.error("❌ Error al actualizar job:", error);
    return res.status(400).json({ message: "Error al actualizar job", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para eliminar un job.
export const deleteJobController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) return res.status(400).json({ message: "El userId es obligatorio para eliminar este job." });

    const result = await deleteJobService(id, userId);
    return res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error al eliminar job:", error);
    return res.status(400).json({ message: "Error al eliminar job", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para obtener todos los jobs de una compañía.
export const getJobsByCompanyController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const jobs = await getJobsByCompanyService(id);

    const filteredJobs = jobs.map((job) => ({
      ...job, // todas las props del job.

      recruiter: job.recruiter && {
        id: job.recruiter.id,
        name: job.recruiter.name,
        email: job.recruiter.email,
        role: job.recruiter.role,
      },

      company: job.company && {
        id: job.company.id,
        name: job.company.name,
      },
    }));

    return res.status(200).json(filteredJobs);
  } catch (error) {
    console.error("❌ Error al obtener jobs de una compañía:", error);
    return res.status(500).json({ message: "Error al obtener jobs de la compañía" });
  }
};

export const getAllJobsController = async (req: Request, res: Response) => {
  try {
    const jobs = await getAllJobsService();

    const filteredJobs = jobs.map((job) => ({
      ...job, // todas las props originales
      recruiter: job.recruiter && {
        id: job.recruiter.id,
        name: job.recruiter.name,
        email: job.recruiter.email,
        role: job.recruiter.role,
      },
      company: job.company && {
        id: job.company.id,
        name: job.company.name,
      },
    }));

    return res.status(200).json(filteredJobs);
  } catch (error) {
    console.error("❌ Error al obtener todos los jobs:", error);
    return res.status(500).json({ message: "Error al obtener todos los jobs", error: (error as Error).message });
  }
};

export const getJobsByRecruiterController = async (req: Request, res: Response) =>{
  try {
    const { id } = req.params;
    const jobs = await getJobsByRecruiterService(id);

    return res.status(200).json(jobs);
  } catch (error) {
    console.error("❌ Error al obtener jobs de un recruiter:", error);
    return res.status(500).json({ message: "Error al obtener jobs de un recruiter", error: (error as Error).message });
  }
}