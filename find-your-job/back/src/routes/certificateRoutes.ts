import { Router } from "express";
import { createCertificateController, deleteCertificateController, getAllCertificatesByUserController, updateCertificateController } from "../controllers/certificateController";
import { validateCreateCertificate } from "../middlewares/validateCertificate";

const certificateRoutes = Router();

certificateRoutes.post("/create", validateCreateCertificate, createCertificateController); // Crear certificado por usuario.
certificateRoutes.get("/user/:id", getAllCertificatesByUserController); // Obtener todos los certificados de un user.
certificateRoutes.put("/edit/:id", updateCertificateController); // Actualizar un certificado.
certificateRoutes.delete("/delete/:id", deleteCertificateController); // Eliminar un certificado especifico.

export default certificateRoutes;
