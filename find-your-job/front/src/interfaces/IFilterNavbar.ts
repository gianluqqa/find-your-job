
export interface IFilterNavbar {
  search: string;
  location: "" | "Buenos Aires" | "Córdoba" | "Catamarca" | "Chaco" | "Chubut" | "Corrientes" | "Entre Ríos" | "Formosa" | "Jujuy" | "La Pampa" | "La Rioja" | "Mendoza" | "Misiones" | "Neuquén" | "Río Negro" | "Salta" | "San Juan" | "San Luis" | "Santa Cruz" | "Santa Fe" | "Santiago del Estero" | "Tierra del Fuego" | "Tucumán";
  modality: "" | "On-site" | "Remote" | "Hybrid";
  salary: "" | "All" | "0-30000" | "30000-50000" | "50000-70000" | "70000-100000" | "100000+";
  createdAt: "" | "All" | "Last 7 days" | "Last 30 days" | "Last 90 days" ;
  type: "" | "Full-Time" | "Part-Time" | "Freelance" | "Internship" | "Temporary";
  category: "" | "IT & Software" | "Marketing" | "Design" | "Sales" | "Finance";
}
