import { Router } from "express";
import { createExperienceController, deleteExperienceController, getExperiencesByCandidateIdController, updateExperienceController } from "../controllers/experienceController";
import { validateCreateExperience } from "../middlewares/validateExperience";

const experienceRoutes = Router();

experienceRoutes.post("/create", validateCreateExperience, createExperienceController);
experienceRoutes.get("/get/:id", getExperiencesByCandidateIdController);
experienceRoutes.delete("/delete/:id", deleteExperienceController);
experienceRoutes.put("/edit/:id", updateExperienceController);


export default experienceRoutes;
