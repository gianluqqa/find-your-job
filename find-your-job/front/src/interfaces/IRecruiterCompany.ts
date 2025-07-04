import { ICompany } from "./ICompany";

export interface IRecruiterCompany  {
    id?: string;
    name?: string;
    company: ICompany[];
    image?: string;
    about?: string;
    country?: string;
    state?: string;
    city?: string;    
}