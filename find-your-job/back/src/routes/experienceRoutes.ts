import { Router } from "express";
import { createExperienceController, deleteExperienceController, getExperiencesByCandidateIdController } from "../controllers/experienceController";
import { validateExperience } from "../middlewares/validateExperience";

const experienceRoutes = Router();

experienceRoutes.post("/create", validateExperience, createExperienceController);
experienceRoutes.get("/get/:id", getExperiencesByCandidateIdController);
experienceRoutes.delete("/delete/:id", deleteExperienceController);


export default experienceRoutes;
