import { Request, Response } from "express";
import { getAllTechnologiesService } from "../services/technologyService";

export const getAllTechnologies = async (req: Request, res: Response) => {
  try {
    const technologies = await getAllTechnologiesService();
    return res.status(200).json(technologies);
  } catch (error) {
    console.error("❌ Error fetching technologies:", error);
    return res.status(500).json({ message: "Error fetching technologies" });
  }
};