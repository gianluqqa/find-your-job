import { Router } from "express";
import { createExperienceController, deleteExperienceController, getExperiencesByCandidateIdController, updateExperienceController } from "../controllers/experienceController";
import { validateExperience } from "../middlewares/validateExperience";

const experienceRoutes = Router();

experienceRoutes.post("/create", validateExperience, createExperienceController);
experienceRoutes.get("/get/:id", getExperiencesByCandidateIdController);
experienceRoutes.delete("/delete/:id", deleteExperienceController);
experienceRoutes.put("/edit/:id", updateExperienceController);


export default experienceRoutes;
