export interface StudyDto {
  id: string;
  title: string;
  institution: string;
  degree: "Bachelor" | "Master" | "Doctor";
  field?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  userId: string;
}
