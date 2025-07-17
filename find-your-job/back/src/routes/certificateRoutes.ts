import { Router } from "express";
import { createCertificateController, getAllCertificatesByUserController } from "../controllers/certificateController";
import { validateCreateCertificate } from "../middlewares/validateCreateCertificate";

const certificateRoutes = Router();

certificateRoutes.post("/", validateCreateCertificate, createCertificateController); // Crear certificado por usuario.
certificateRoutes.get("/user/:id", getAllCertificatesByUserController); // Obtener todos los certificados de un user.

export default certificateRoutes;
