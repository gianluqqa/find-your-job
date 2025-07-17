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
    user: user
  });

  await certificateRepository.save(newCertificate);
  return newCertificate;
};

export const getAllCertificatesByUserService = async (userId: string) => {
  const certificateRepository = AppDataSource.getRepository(Certificate);
  return await certificateRepository.find({
    where: { user: { id: userId } }
  });
};
