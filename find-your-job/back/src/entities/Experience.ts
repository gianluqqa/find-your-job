import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity()
export class Experience {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  company!: string;

  @Column()
  startDate!: Date;

  @Column({ nullable: true })
  endDate?: Date;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  location?: string;

  @ManyToOne(() => User, user => user.experience)
  user!: User;
}
