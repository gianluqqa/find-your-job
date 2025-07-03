import { IPostulation } from "./IPostulation";
import { ISkills } from "./ISkills";

export interface ICandidate {
  id?: string;
  image?: string;
  name: string;
  email: string;
  phone?: string;
  country: string;
  state?: string;
  city?: string;
  about?: string;
  skills?: ISkills[];
  postulations?: IPostulation[];
}
