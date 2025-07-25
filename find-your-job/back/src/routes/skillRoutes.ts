import { Router } from "express";
import { createSkillController, deleteSkillController, getSkillsByUserController } from "../controllers/skillController";

const skillRoutes = Router();

skillRoutes.post("/create", createSkillController);
skillRoutes.get("/user/:id", getSkillsByUserController);
skillRoutes.delete("/delete/:id", deleteSkillController);

export default skillRoutes;