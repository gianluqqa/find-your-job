import { Router } from "express";
import { createJobController, deleteJobController, getJobsByCompanyController, updateJobController } from "../controllers/jobController";
import { validateCreateJob } from "../middlewares/validateCreateJob";
import { validateUpdateJob } from "../middlewares/validateUpdateJob";

const jobRoutes = Router();

jobRoutes.post("/create", validateCreateJob, createJobController);
jobRoutes.put("/edit/:id", validateUpdateJob, updateJobController);
jobRoutes.delete("/delete/:id", deleteJobController);
jobRoutes.get("/company/:id", getJobsByCompanyController);

export default jobRoutes;
