import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Study {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  institution!: string;

  @Column()
  degree!: string;

  @Column({ nullable: true })
  field?: string;

  @Column()
  startDate!: Date; // Podés usar Date si querés, pero la interfaz dice string

  @Column({ nullable: true })
  endDate?: Date;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => User, user => user.studies)
  user!: User;
}
