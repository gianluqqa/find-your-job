import { Router } from "express";
import { createJobController, deleteJobController, getJobsByCompanyController, updateJobController } from "../controllers/jobController";
import { validateCreateJob } from "../middlewares/validateCreateJob";
import { validateUpdateJob } from "../middlewares/validateUpdateJob";

const jobRoutes = Router();

jobRoutes.post("/", validateCreateJob, createJobController);
jobRoutes.put("/:id", validateUpdateJob, updateJobController);
jobRoutes.delete("/:id", deleteJobController);
jobRoutes.get("/company/:id", getJobsByCompanyController);

export default jobRoutes;
