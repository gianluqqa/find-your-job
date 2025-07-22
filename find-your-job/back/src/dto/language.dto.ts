export interface LanguageDto {
  id?: string;
  name: string;
  level: "basic" | "intermediate" | "advanced" | "native";
  userId: string;
}
