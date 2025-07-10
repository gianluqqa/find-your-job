export interface IExperience {
  id?: string;
  title: string;
  company: string;
  startDate: string; // ISO: YYYY-MM-DD
  endDate?: string;  // null o undefined si es actual
  description?: string;
  location?: string;
}