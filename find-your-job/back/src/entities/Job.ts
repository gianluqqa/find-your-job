import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Company } from "./Company";
import { Postulation } from "./Postulation";

@Entity()
export class Job {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  location!: string;

  @Column({ nullable: true })
  category?: string;

  @Column({ nullable: true })
  salary?: string;

  @Column()
  createdAt!: string;

  @Column()
  status!: "Active" | "Expired" | "Urgent";

  @Column()
  modality!: "On-site" | "Remote" | "Hybrid";

  @Column()
  type!: "Full-Time" | "Part-Time" | "Freelance" | "Internship" | "Temporary";

  @Column({ nullable: true })
  vacancies?: number;

  @Column({ nullable: true })
  requirements?: string;

  @Column({ nullable: true })
  benefits?: string;

  @ManyToOne(() => Company, company => company.jobs)
  company!: Company;

  @OneToMany(() => Postulation, postulation => postulation.job)
  postulations!: Postulation[];
}
