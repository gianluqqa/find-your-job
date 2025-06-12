export interface IAd {
  id: string;              // ID único del anuncio
  company: string;         // Nombre de la empresa (ej: "McDonald's")
  vacancies: number;       // Cantidad de nuevas vacantes publicadas
  location: string;        // Ciudad o país donde se publicaron
  date: string;            // Fecha del anuncio (formato ISO o legible)
  jobTitles: string[];     // Títulos de puestos destacados (opcionalmente mostrados)
}