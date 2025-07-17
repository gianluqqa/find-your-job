import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Certificate {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  institution!: string;

  @Column()
  graduationDate!: Date; // Podés poner Date si querés, pero la interfaz dice string

   @Column({ nullable: true })
  url?: string;

  @ManyToOne(() => User, user => user.certificates)
  user!: User;
}
