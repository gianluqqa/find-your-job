import { Request, Response } from "express";
import { createCertificateService, deleteCertificateService, getAllCertificatesByUserService, updateCertificateService } from "../services/certificateService";

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

export const updateCertificateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // id del certificado
    const { title, institution, graduationDate, url } = req.body;

    const updatedCertificate = await updateCertificateService(id, {
      title,
      institution,
      graduationDate,
      url,
    });

    res.status(200).json(updatedCertificate);
  } catch (error) {
    console.error("❌ Error al actualizar certificado:", error);
    res.status(500).json({ message: "Error al actualizar certificado", error: (error as Error).message });
  }
};

export const deleteCertificateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await deleteCertificateService(id);

    res.status(200).json(result);
  } catch (error) {
    console.error("❌ Error al eliminar certificado:", error);
    res.status(500).json({ message: "Error al eliminar certificado", error: (error as Error).message });
  }
};