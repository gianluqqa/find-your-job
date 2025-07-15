import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Job } from "./Job";

@Entity()
export class Postulation {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column({ default: "pending" })
  status!: "pending" | "approved" | "rejected";

  @ManyToOne(() => User, user => user.postulations)
  candidate!: User;

  @ManyToOne(() => Job, job => job.postulations)
  job!: Job;
}
