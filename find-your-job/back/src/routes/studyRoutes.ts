import { Router } from "express";
import { createStudyController, deleteStudyController, getStudiesByUserController, updateStudyController } from "../controllers/studyController";
import { validateCreateStudy } from "../middlewares/validateCreateStudy";

const studyRoutes = Router();

studyRoutes.post("/create", validateCreateStudy, createStudyController);
studyRoutes.get("/user/:id", getStudiesByUserController); // Obtener estudios de un usuario.
studyRoutes.delete("/delete/:id", deleteStudyController); // Eliminar un estudio específico.
studyRoutes.put("/edit/:id", updateStudyController);



export default studyRoutes;