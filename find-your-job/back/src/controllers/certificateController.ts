import { Request, Response } from "express";
import { createCertificateService, getAllCertificatesByUserService } from "../services/certificateService";

export const createCertificateController = async (req: Request, res: Response) => {
  try {
    const { title, institution, graduationDate, userId, url } = req.body;

    const newCertificate = await createCertificateService({ title, institution, graduationDate, userId, url });

    console.log("✅ Certificado creado:", newCertificate);
    return res.status(201).json(newCertificate);
  } catch (error) {
    console.error("❌ Error al crear certificado:", error);
    return res.status(500).json({ message: "Error al crear certificado", error: (error as Error).message });
  }
};

export const getAllCertificatesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const certificates = await getAllCertificatesByUserService(id);

    return res.status(200).json(certificates);
  } catch (error) {
    console.error("❌ Error al obtener certificados del usuario:", error);
    return res.status(500).json({ message: "Error al obtener certificados", error: (error as Error).message });
  }
};
