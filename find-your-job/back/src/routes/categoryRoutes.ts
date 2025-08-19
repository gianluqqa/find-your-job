import { Router } from "express";
import { getAllCategoriesController } from "../controllers/categoryController";

const categoryRoutes = Router();

categoryRoutes.get("/", getAllCategoriesController);


export default categoryRoutes;