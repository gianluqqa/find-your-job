import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { Technology } from "./Technology";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Technology, { nullable: true })
  technology?: Technology;

  @Column({ nullable: true })
  customName?: string;

  @ManyToOne(() => User, user => user.skills)
  user!: User;
}

