import { IJob } from "./IJob";
import { IPostulation } from "./IPostulation";

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: "candidate" | "recruiter";
  // Datos comunes
  country: string;
  state: string;
  city: string;
  // Solo si es candidate
  phone?: string;
  about?: string;
  postulations?: IPostulation[];
  // Solo si es recruiter
  src?: string;
  alt?: string;
  jobs?: IJob[];
  // Token si usás auth real en un futuro
  token?: string;
}
