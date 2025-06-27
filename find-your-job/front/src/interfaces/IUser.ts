import { IAptitude } from "./IAptitude";
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
  role: "candidate" | "recruiter";

  // Datos comunes
  country: string;
  state: string;
  city: string;
  phone?: string;
  about?: string;
  image?: string;

  // Solo para candidatos
  skills?: ISkills[];
  aptitudes?: IAptitude[];
  postulations?: IPostulation[];
  experience?: IExperience[];
  studies?: IStudy[];
  resume?: IResume;
  languages?: ILanguage[];

  // Solo para reclutadores
  company?: string;
  jobs?: IJob[];

  // Token (si usás auth real en el futuro)
  token?: string;
}
