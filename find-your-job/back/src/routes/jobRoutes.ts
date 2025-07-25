import { Router } from "express";
import { createJobController, deleteJobController, getAllJobsController, getJobsByCompanyController, updateJobController } from "../controllers/jobController";
import { validateCreateJob, validateUpdateJob } from "../middlewares/validateJob";

const jobRoutes = Router();

jobRoutes.post("/create", validateCreateJob, createJobController);
jobRoutes.put("/edit/:id", validateUpdateJob, updateJobController);
jobRoutes.delete("/delete/:id", deleteJobController);
jobRoutes.get("/company/:id", getJobsByCompanyController);
jobRoutes.get("/all", getAllJobsController);

export default jobRoutes;
