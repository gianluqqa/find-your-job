import { IJob } from "./IJob";

export interface ICompany {
  id?: string;
  name?: string;
  image?: string;
  category?: string;
  description?: string;
  createdAt?: string;
  jobs?: IJob[];
  userId?: string;
}
