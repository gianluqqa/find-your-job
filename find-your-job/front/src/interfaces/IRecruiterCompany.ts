import { IJob } from "./IJob";

export interface IRecruiterCompany  {
    id?: string;
    name?: string;
    image?: string;
    about?: string;
    state?: string;
    city?: string;
    alt?: string;
    jobs?: IJob[];
}