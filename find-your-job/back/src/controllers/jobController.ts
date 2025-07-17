import { Request, Response } from "express";
import { createJobService, updateJobService } from "../services/jobService";

export const createJobController = async (req: Request, res: Response) => {
  try {
    const newJob = await createJobService(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    console.error("❌ Error al crear job:", error);
    res.status(500).json({ message: "Error al crear job", error: (error as Error).message });
  }
};

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
