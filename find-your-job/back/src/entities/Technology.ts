import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Technology {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ unique: true })
  name!: string;
}
