import { Request, Response } from "express";
import { createStudyService } from "../services/studyService";

export const createStudyController = async (req: Request, res: Response) => {
  try {
    const { userId, ...studyData } = req.body;

    const newStudy = await createStudyService(studyData, userId);

    res.status(201).json(newStudy);
  } catch (error) {
    console.error("❌ Error al crear estudio:", error);
    res.status(400).json({ message: "Error al crear estudio", error: (error as Error).message });
  }
};
