import { AptitudeDto } from "./aptitude.dto";
import { CertificateDto } from "./certificate.dto";
import { CompanyDto } from "./company.dto";
import { ExperienceDto } from "./experience.dto";
import { JobDto } from "./job.dto";
import { LanguageDto } from "./language.dto";
import { PostulationDto } from "./postulation.dto";
import { ResumeDto } from "./resume.dto";
import { SkillDto } from "./skill.dto";
import { StudyDto } from "./study.dto";

export interface UserDto {
  id: string;
  name: string;
  email: string;
  role: "candidate" | "recruiter" | "admin"; // lo hacemos obligatorio
  country: string;
  state: string;
  city: string;
  phone?: string;
  about?: string;
  image?: string;
  status: "active" | "suspended"; // lo hacemos obligatorio
  createdAt: string; // o Date, según cómo lo devuelva el back

  // Relaciones comunes
  skills?: SkillDto[];
  studies?: StudyDto[];
  certificates?: CertificateDto[];

  // Solo candidate
  aptitudes?: AptitudeDto[];
  postulations?: PostulationDto[];
  experience?: ExperienceDto[];
  resume?: ResumeDto;
  languages?: LanguageDto[];

  // Solo recruiter
  companies?: CompanyDto[]; // plural para que coincida con back
  jobs?: JobDto[]; // falta en tu versión original

  // 🔒 El token NO debería estar aquí de forma fija
  // Si querés, podés manejarlo en AuthContext, no como propiedad del usuario
}