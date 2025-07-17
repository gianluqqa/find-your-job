import { Router } from "express";
import { createJobController, updateJobController } from "../controllers/jobController";
import { validateCreateJob } from "../middlewares/validateCreateJob";
import { validateUpdateJob } from "../middlewares/validateUpdateJob";

const jobRoutes = Router();

jobRoutes.post("/", validateCreateJob, createJobController);
jobRoutes.put("/:id", validateUpdateJob, updateJobController);

export default jobRoutes;
