import { IAptitude } from "./IAptitude";
import { ICertificate } from "./ICertificate";
import { ICompany } from "./ICompany";
import { IExperience } from "./IExperience";
import { IJob } from "./IJob";
import { ILanguage } from "./ILanguage";
import { IPostulation } from "./IPostulation";
import { IResume } from "./IResume";
import { ISkills } from "./ISkills";
import { IStudy } from "./IStudy";

export interface IUser {
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
  skills?: ISkills[];
  studies?: IStudy[];
  certificates?: ICertificate[];

  // Solo candidate
  aptitudes?: IAptitude[];
  postulations?: IPostulation[];
  experience?: IExperience[];
  resume?: IResume;
  languages?: ILanguage[];

  // Solo recruiter
  companies?: ICompany[]; // plural para que coincida con back
  jobs?: IJob[]; // falta en tu versión original

  // 🔒 El token NO debería estar aquí de forma fija
  // Si querés, podés manejarlo en AuthContext, no como propiedad del usuario
}
