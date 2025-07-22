import { CategoryDto } from "./category.dto";

export interface JobDto {
  id: string;
  title: string;
  description: string;
  company: string;
  location: string;
  category?: CategoryDto;
  salary?: string;
  createdAt: string;
  status: "Active" | "Expired" | "Urgent";
  modality: "On-site" | "Remote" | "Hybrid";
  type: "Full-Time" | "Part-Time" | "Freelance" | "Internship" | "Temporary";
  vacancies?: number;
  requirements?: string;
  benefits?: string;
  companyId?: string;
  recruiterId?: string;
}
