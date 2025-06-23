import { IJob } from "./IJob";

export interface IRecruiterCompany  {
    id?: string;
    src?: string;
    name?: string;
    about?: string;
    state?: string;
    city?: string;
    alt?: string;
    jobs?: IJob[];
}