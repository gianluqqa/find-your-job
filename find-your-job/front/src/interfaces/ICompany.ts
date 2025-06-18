import { IJob } from "./IJob";

export interface ICompany  {
    id: string;
    src: string;
    name: string;
    alt?: string;
    jobs?: IJob[];
}