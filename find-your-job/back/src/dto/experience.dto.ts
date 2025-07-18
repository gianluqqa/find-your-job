export interface ExperienceDto {
  id?: string;
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description?: string;
  location?: string;
  candidateId: string;
}
