import { Router } from "express";
import { createCertificateController, deleteCertificateController, getAllCertificatesByUserController, updateCertificateController } from "../controllers/certificateController";
import { validateCreateCertificate } from "../middlewares/validateCreateCertificate";

const certificateRoutes = Router();

certificateRoutes.post("/", validateCreateCertificate, createCertificateController); // Crear certificado por usuario.
certificateRoutes.get("/user/:id", getAllCertificatesByUserController); // Obtener todos los certificados de un user.
certificateRoutes.put("/:id", updateCertificateController); // Actualizar un certificado.
certificateRoutes.delete("/:id", deleteCertificateController); // Eliminar un certificado especifico.

export default certificateRoutes;
