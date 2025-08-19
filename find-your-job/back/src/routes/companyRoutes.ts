import { Router } from "express";
import { createCompanyController, getAllCompaniesByUserIdController, getAllCompaniesController, getCompanyByIdController } from "../controllers/companyController";
import { validateCreateCompany } from "../middlewares/validateCompany";

const companyRoutes = Router();

companyRoutes.post("/create", validateCreateCompany, createCompanyController);
companyRoutes.get("/", getAllCompaniesController);
companyRoutes.get("/get/:id", getCompanyByIdController);
companyRoutes.get("/all/:userId", getAllCompaniesByUserIdController);

export default companyRoutes;
