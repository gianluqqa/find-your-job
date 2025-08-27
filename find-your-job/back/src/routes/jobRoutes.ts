import { Router } from "express";
import { createJobController, deleteJobController, getAllJobsController, getJobsByCompanyController, getJobsByRecruiterController, updateJobController } from "../controllers/jobController";
import { validateCreateJob, validateUpdateJob } from "../middlewares/validateJob";

const jobRoutes = Router();

jobRoutes.post("/create", validateCreateJob, createJobController);
jobRoutes.put("/edit/:id", validateUpdateJob, updateJobController);
jobRoutes.delete("/delete/:id", deleteJobController);
jobRoutes.get("/company/:id", getJobsByCompanyController);
jobRoutes.get("/all", getAllJobsController);
jobRoutes.get("/recruiter/:id", getJobsByRecruiterController);

export default jobRoutes;
