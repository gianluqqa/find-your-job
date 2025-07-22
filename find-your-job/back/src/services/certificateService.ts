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
  return newCertificate;
};

export const getAllCertificatesByUserService = async (userId: string) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);
  return await certificateRepository.find({
    where: { user: { id: userId } },
  });
};

export const updateCertificateService = async (certificateId: string, updateData: Partial<CertificateDto>) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);

  const certificate = await certificateRepository.findOneBy({ id: certificateId });

  if (!certificate) {
    throw new Error("Certificado no encontrado");
  }

  // Actualiza solo los campos que vienen
  Object.assign(certificate, updateData);

  await certificateRepository.save(certificate);

  return certificate;
};

export const deleteCertificateService = async (certificateId: string) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);

  const certificate = await certificateRepository.findOneBy({ id: certificateId });

  if (!certificate) {
    throw new Error("Certificado no encontrado");
  }

  await certificateRepository.remove(certificate);

  return { message: "Certificado eliminado correctamente" };
};
