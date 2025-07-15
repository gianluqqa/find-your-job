import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Resume {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  url!: string;

  @Column()
  uploadedAt!: string; // Podés usar Date si preferís

  @OneToOne(() => User, user => user.resume)
  @JoinColumn()
  user!: User;
}
