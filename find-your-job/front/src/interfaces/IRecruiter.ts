import { IJob } from "./IJob";

export interface IRecruiter  {
    id?: string;
    src?: string;
    name?: string;
    about?: string;
    state?: string;
    city?: string;
    alt?: string;
    jobs?: IJob[];
}