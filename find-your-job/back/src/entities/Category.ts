import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { CategoryDto } from "../dto/category.dto";
import { Company } from "./Company";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

 @Column({
    type: "enum",
    enum: CategoryDto,
    unique: true
  })
  name!: CategoryDto;

  @OneToMany(() => Company, company => company.category)
  companies!: Company[];
}
