import { ICompany } from "./ICompany";

export interface IJob {
  id: string;
  title: string;
  description: string;
  company: ICompany;
  location: string;
  category?: string;
  salary?: string;
  createdAt: string;
  status: "Active" | "Expired" | "Urgent";
  modality: "On-site" | "Remote" | "Hybrid";
  type: "Full-Time" | "Part-Time" | "Freelance" | "Internship" | "Temporary";
  vacancies?: number;
  benefits?: string;
  requirements?: string;
  companyId?: string;
  userId?: string;
}

export interface ICreateJob {
  title: string;
  description: string;
  location: string;
  category: string; 
  salary?: string;
  status: "Active" | "Expired" | "Urgent";
  modality: "On-site" | "Remote" | "Hybrid";
  type: "Full-Time" | "Part-Time" | "Freelance" | "Internship" | "Temporary";
  vacancies?: number;
  requirements?: string;
  benefits?: string;
  userId: string;     // recruiterId
  companyId: string;  // ID de la empresa
}

