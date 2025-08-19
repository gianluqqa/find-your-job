import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from "typeorm";
import { User } from "./User";
import { Job } from "./Job";
import { Category } from "./Category";

@Entity()
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: true })
  name?: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn({ type: "timestamp" })
  createdAt!: Date;

  @OneToMany(() => Job, (job) => job.company)
  jobs?: Job[];

  @ManyToOne(() => User, (user) => user.companies)
  recruiter!: User;

  @ManyToOne(() => Category, (category) => category.companies)
  category!: Category;
}
