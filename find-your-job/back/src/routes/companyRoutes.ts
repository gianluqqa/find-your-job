import { Router } from "express";
import {createCompanyController, getAllCompaniesController, getCompanyByIdController} from "../controllers/companyController";
import { validateCreateCompany } from "../middlewares/validateCreateCompany";

const companyRoutes = Router();

companyRoutes.post("/create", validateCreateCompany, createCompanyController);
companyRoutes.get("/", getAllCompaniesController);
companyRoutes.get("/get/:id", getCompanyByIdController);

export default companyRoutes;
