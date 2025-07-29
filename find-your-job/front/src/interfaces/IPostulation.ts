import { ICompany } from "./ICompany";

export interface IPostulation {
  id?: string;
  title: string;
  company: ICompany;
  status: "pending" | "approved" | "rejected";
}
