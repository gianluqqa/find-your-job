import { Router } from "express";
import { getAllTechnologies } from "../controllers/technologyController";

const technologyRoutes = Router();

technologyRoutes.get("/", getAllTechnologies);

export default technologyRoutes;
