import { validateDeleteCertificate, validateUpdateCertificate } from './../middlewares/validateCertificate';
import { Router } from "express";
import { createCertificateController, deleteCertificateController, getAllCertificatesByUserController, updateCertificateController } from "../controllers/certificateController";
import { validateCreateCertificate } from "../middlewares/validateCertificate";

const certificateRoutes = Router();

certificateRoutes.post("/create", validateCreateCertificate, createCertificateController); // Crear certificado por usuario.
certificateRoutes.get("/user/:id", getAllCertificatesByUserController); // Obtener todos los certificados de un user.
certificateRoutes.put("/edit/:id", validateUpdateCertificate, updateCertificateController); // Actualizar un certificado.
certificateRoutes.delete("/delete/:id", validateDeleteCertificate, deleteCertificateController); // Eliminar un certificado especifico.

export default certificateRoutes;
