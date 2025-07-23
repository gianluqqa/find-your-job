export interface AptitudeDto {
  id?: string;
  name: string;
  level?: "beginner" | "intermediate" | "advanced";
  userId?: string;
}