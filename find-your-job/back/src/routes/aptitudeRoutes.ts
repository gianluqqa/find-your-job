import { Router } from "express";
import { createAptitudeController, deleteAptitudeController, getAptitudesByUserController, updateAptitudeController } from "../controllers/aptitudeController";
import { validateCreateAptitude } from "../middlewares/validateAptitude";

const aptitudeRoutes = Router();

aptitudeRoutes.post("/create", validateCreateAptitude, createAptitudeController);
aptitudeRoutes.get("/user/:id", getAptitudesByUserController);
aptitudeRoutes.delete("/delete/:id", deleteAptitudeController);
aptitudeRoutes.put("/edit/:id", updateAptitudeController);

export default aptitudeRoutes;
