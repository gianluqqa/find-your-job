import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";

import { Skill } from "./Skill";
import { Study } from "./Study";
import { Certificate } from "./Certificate";
import { Aptitude } from "./Aptitude";
import { Postulation } from "./Postulation";
import { Experience } from "./Experience";
import { Resume } from "./Resume";
import { Language } from "./Language";
import { Company } from "./Company";
import { Job } from "./Job";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @Column({ default: "candidate" })
  role!: "candidate" | "recruiter" | "admin";

  @Column()
  country!: string;

  @Column()
  state!: string;

  @Column()
  city!: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  about?: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ default: "active" })
  status!: "active" | "suspended";

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  // Relaciones comunes
  @OneToMany(() => Skill, (skill) => skill.user)
  skills?: Skill[];

  @OneToMany(() => Study, (study) => study.user)
  studies?: Study[];

  @OneToMany(() => Certificate, (certificate) => certificate.user)
  certificates?: Certificate[];

  // Solo candidate
  @OneToMany(() => Aptitude, (aptitude) => aptitude.user)
  aptitudes?: Aptitude[];

  @OneToMany(() => Postulation, (postulation) => postulation.candidate)
  postulations?: Postulation[];

  @OneToMany(() => Experience, (experience) => experience.user)
  experience?: Experience[];

  @OneToOne(() => Resume, (resume) => resume.user)
  @JoinColumn()
  resume?: Resume;

  @OneToMany(() => Language, (language) => language.user)
  languages?: Language[];

  // Solo recruiter
  @OneToMany(() => Company, (company) => company.recruiter)
  companies?: Company[];

  @OneToMany(() => Job, (job) => job.recruiter)
  jobs!: Job[];
}
