import { CategoryDto } from "./category.dto";
import { JobDto } from "./job.dto";

export interface CompanyDto {
  id?: string;
  name?: string;
  image?: string;
  category?: CategoryDto;
  description?: string;
  jobs?: JobDto[];
  createdAt?: string;
  userId?: string;
}
