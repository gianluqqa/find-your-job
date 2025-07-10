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
  role?: "candidate" | "recruiter";

  // Datos comunes
  country: string;
  state: string;
  city: string;
  phone?: string;
  about?: string;
  image?: string;
  skills?: ISkills[];
  studies?: IStudy[];
  certificates?: ICertificate[];

  // Solo para candidatos
  aptitudes?: IAptitude[];
  postulations?: IPostulation[];
  experience?: IExperience[];
  resume?: IResume;
  languages?: ILanguage[];

  // Solo para reclutadores
  company?: ICompany[];
  jobs?: IJob[];

  // Token (si usás auth real en el futuro)
  token?: string;
}
