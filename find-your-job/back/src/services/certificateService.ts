import { AppDataSource } from "../config/data-source";
import { CertificateDto } from "../dto/certificate.dto";
import { Certificate } from "../entities/Certificate";
import { User } from "../entities/User";

export const createCertificateService = async (certificateData: CertificateDto) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: certificateData.userId });
  if (!user) throw new Error("Usuario no encontrado");

  const newCertificate = certificateRepository.create({
    title: certificateData.title,
    institution: certificateData.institution,
    graduationDate: new Date(certificateData.graduationDate),
    url: certificateData.url,
    user: user,
  });

  await certificateRepository.save(newCertificate);

  const certificateWithUser = await certificateRepository.findOne({
    where: { id: newCertificate.id },
    relations: ["user"],
  });

  return certificateWithUser;
};

export const getAllCertificatesByUserService = async (userId: string) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);
  return await certificateRepository.find({
    where: { user: { id: userId } },
    relations: ["user"],
  });
};

export const updateCertificateService = async (certificateId: string, updateData: Partial<CertificateDto> & { userId: string }) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);

  // Traer también el usuario relacionado
  const certificate = await certificateRepository.findOne({
    where: { id: certificateId },
    relations: ["user"],
  });

  if (!certificate) {
    throw new Error("Certificado no encontrado");
  }

  if (certificate.user.id !== updateData.userId) {
    throw new Error("No tienes permisos para actualizar este certificado");
  }

  // Actualiza solo los campos que vienen
  Object.assign(certificate, updateData);

  await certificateRepository.save(certificate);

  // Traer actualizado con relación para filtrar luego
  const updatedCertificate = await certificateRepository.findOne({
    where: { id: certificateId },
    relations: ["user"],
  });

  return updatedCertificate;
};

export const deleteCertificateService = async (certificateId: string, userId: string) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);

  const certificate = await certificateRepository.findOne({
    where: { id: certificateId },
    relations: ["user"],
  });

  if (!certificate) {
    throw new Error("Certificado no encontrado");
  }

  if (certificate.user.id !== userId) {
    throw new Error("No autorizado para eliminar este certificado");
  }

  await certificateRepository.remove(certificate);

  return { message: "Certificado eliminado correctamente" };
};
