import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "../entities/User";
import { Skill } from "../entities/Skill";
import { Study } from "../entities/Study";
import { Certificate } from "../entities/Certificate";
import { Aptitude } from "../entities/Aptitude";
import { Postulation } from "../entities/Postulation";
import { Experience } from "../entities/Experience";
import { Resume } from "../entities/Resume";
import { Language } from "../entities/Language";
import { Company } from "../entities/Company";
import { Job } from "../entities/Job";
import { Category } from "../entities/Category";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "glc2001luca2001",
  database: "find_your_job",
  synchronize: true,
  logging: ["error"],
  entities: [
    User,
    Skill,
    Study,
    Certificate,
    Aptitude,
    Postulation,
    Experience,
    Resume,
    Language,
    Company,
    Job,
    Category,
  ],
});
