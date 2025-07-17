import { Request, Response } from "express";
import { createJobService, deleteJobService, getJobsByCompanyService, updateJobService } from "../services/jobService";

//Controlador que maneja la funcion para crear un job.
export const createJobController = async (req: Request, res: Response) => {
  try {
    const newJob = await createJobService(req.body);
    res.status(201).json(newJob);
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
    return res.status(200).json(updatedJob);
  } catch (error) {
    console.error("❌ Error al actualizar job:", error);
    return res.status(400).json({ message: "Error al actualizar job", error: (error as Error).message });
  }
};

//Controlador que maneja la funcion para eliminar un job.
export const deleteJobController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { recruiterId } = req.body;

    if (!recruiterId) return res.status(400).json({ message: "Falta recruiterId" });

    const result = await deleteJobService(id, recruiterId);
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
    return res.status(200).json(jobs);
  }
  catch (error) {
    console.error("❌ Error al obtener jobs de una compañía:", error);
  }
}