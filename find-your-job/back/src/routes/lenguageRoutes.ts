import { validateCreateLanguage } from './../middlewares/validateLanguage';
import { Router } from "express";
import { createLanguageController, deleteLanguageController, getAllLanguagesByUserController, updateLanguageController } from "../controllers/languageController";

const languageRoutes = Router();

languageRoutes.post("/create", validateCreateLanguage, createLanguageController);
languageRoutes.get("/user/:id", getAllLanguagesByUserController);
languageRoutes.put("/edit/:id", updateLanguageController);
languageRoutes.delete("/delete/:id", deleteLanguageController);

export default languageRoutes;