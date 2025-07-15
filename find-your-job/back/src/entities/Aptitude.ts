import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Aptitude {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  level?: "beginner" | "intermediate" | "advanced";

  @ManyToOne(() => User, user => user.aptitudes)
  user!: User;
}
