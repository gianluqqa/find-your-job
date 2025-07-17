import { Router } from "express";
import { createStudyController } from "../controllers/studyController";
import { validateCreateStudy } from "../middlewares/validateCreateStudy";

const studyRoutes = Router();

studyRoutes.post("/", validateCreateStudy, createStudyController);

export default studyRoutes;