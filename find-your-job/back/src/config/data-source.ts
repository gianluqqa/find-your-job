import "reflect-metadata";
import "dotenv/config"; // Importamos dotenv para leer variables de entorno del archivo .env

import { DataSource } from "typeorm";

// Importamos todas nuestras entidades (tablas)
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
import { Technology } from "../entities/Technology";

// Creamos la conexión a la base de datos
export const AppDataSource = new DataSource({
  type: "postgres", // tipo de base de datos
  host: process.env.DB_HOST || "localhost", // host, por defecto localhost
  port: parseInt(process.env.DB_PORT || "5432"), // Convierte el string a number con parseInt de lo contrario, puerto por defecto 5432
  username: process.env.DB_USERNAME || "postgres", // usuario, por defecto postgres
  password: process.env.DB_PASSWORD || "tu_password", // contraseña
  database: process.env.DB_NAME || "find_your_job", // nombre de la base de datos

  synchronize: true, // crea las tablas automáticamente (solo recomendable en desarrollo)
  logging: true, // muestra en consola las queries y errores

  // Acá ponemos todas nuestras entidades para que TypeORM las reconozca
  entities: [User, Skill, Study, Certificate, Aptitude, Postulation, Experience, Resume, Language, Company, Job, Category, Technology],
});
