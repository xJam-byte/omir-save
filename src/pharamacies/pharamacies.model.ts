import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table, HasMany } from "sequelize-typescript";
import { Medication } from "src/medication/medication.model";
import { PharmacyRating } from "src/pharmacy-rating/pharmacy-rating.model";

interface PharmacyCreationAttrs {
  name: string;
  email: string;
  description: string;
  password: string;
  phoneNumber: string;
  picture: string;
  address: string;
}

@Table({ tableName: "user_pharmacies" })
export class Pharmacy extends Model<Pharmacy, PharmacyCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique IIN of the pharmacy" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Abylaikhan",
    description: "Name of the pharmacy",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "Unique e-mail of the pharmacy",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({
    example: "123456",
    description: "Password of the pharmacy",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: "+7-778-999-5599",
    description: "Personal phone number of the pharmacy",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  phoneNumber: string;

  @Column({ type: DataType.STRING, allowNull: true })
  picture: string;

  @ApiProperty({
    example: "",
    description: "Address of the pharmacy",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @HasMany(() => Medication)
  medications: Medication[];

  @HasMany(() => PharmacyRating)
  ratings: PharmacyRating[];
}
