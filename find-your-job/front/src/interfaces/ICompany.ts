import { ICategory } from "./ICategory";
import { IJob } from "./IJob";

export interface ICompany {
  id?: string;
  name?: string;
  image?: string;
  category?: ICategory;
  description?: string;
  createdAt?: string;
  jobs?: IJob[];
  userId?: string;
}

export interface ICreateCompany {
  name: string;
  image?: string;
  description?: string;
  category: string; // ✅ nombre de la categoría
  userId: string;
}
