import { Request, Response } from "express";
import { createCertificateService, deleteCertificateService, getAllCertificatesByUserService, updateCertificateService } from "../services/certificateService";

export const createCertificateController = async (req: Request, res: Response) => {
  try {
    const { title, institution, graduationDate, userId, url } = req.body;

    const newCertificate = await createCertificateService({ title, institution, graduationDate, userId, url });

    if (!newCertificate) {
      return res.status(500).json({ message: "No se pudo crear el certificado" });
    }

    const filteredCertificate = {
      ...newCertificate,
      user: newCertificate.user && {
        id: newCertificate.user.id,
        name: newCertificate.user.name,
        email: newCertificate.user.email,
        role: newCertificate.user.role,
      },
    };

    console.log("✅ Certificado creado:", filteredCertificate);
    return res.status(201).json(filteredCertificate);
  } catch (error) {
    console.error("❌ Error al crear certificado:", error);
    return res.status(500).json({ message: "Error al crear certificado", error: (error as Error).message });
  }
};

export const getAllCertificatesByUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const certificates = await getAllCertificatesByUserService(id);

    const filteredCertificates = certificates.map(cert => ({
      ...cert,
      user: cert.user && {
        id: cert.user.id,
        name: cert.user.name,
        email: cert.user.email,
        role: cert.user.role,
      },
    }));

    return res.status(200).json(filteredCertificates);
  } catch (error) {
    console.error("❌ Error al obtener certificados del usuario:", error);
    return res.status(500).json({ message: "Error al obtener certificados", error: (error as Error).message });
  }
};

export const updateCertificateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params; // ID del certificado
    const { title, institution, graduationDate, url, userId } = req.body;

    const updatedCertificate = await updateCertificateService(id, {
      title,
      institution,
      graduationDate,
      url,
      userId,
    });

    if (!updatedCertificate) {
      return res.status(404).json({ message: "Certificado no encontrado" });
    }

    const filteredCertificate = {
      ...updatedCertificate,
      user: updatedCertificate.user && {
        id: updatedCertificate.user.id,
        name: updatedCertificate.user.name,
        email: updatedCertificate.user.email,
        role: updatedCertificate.user.role,
      },
    };

    return res.status(200).json(filteredCertificate);
  } catch (error) {
    console.error("❌ Error al actualizar certificado:", error);
    return res.status(500).json({ message: "Error al actualizar certificado", error: (error as Error).message });
  }
};

export const deleteCertificateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const deletedCertificate = await deleteCertificateService(id, userId);
    console.log("✅ Certificado eliminado con éxito:", deletedCertificate);
    res.status(200).json(deletedCertificate);
  } catch (error) {
    console.error("❌ Error al eliminar certificado:", error);
    res.status(500).json({ message: "Error al eliminar certificado", error: (error as Error).message });
  }
};