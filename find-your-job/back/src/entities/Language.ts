import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Language {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  level!: "basic" | "intermediate" | "advanced" | "native";

  @ManyToOne(() => User, user => user.languages)
  user!: User;
}
