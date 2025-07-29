import { IJob } from "./IJob";

export interface ICompany {
  id?: string;
  name?: string;
  image?: string;
  category?: string;
  description?: string;
  jobs?: IJob[];
}
