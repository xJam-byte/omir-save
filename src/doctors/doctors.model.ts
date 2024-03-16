import { ApiProperty } from "@nestjs/swagger";
import { Column, Model, DataType, Table, HasMany } from "sequelize-typescript";
import { Prescription } from "src/prescriptions/prescriptions.model";

interface DoctorCreationAttrs {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  phoneNumber: string;
  specialty: string;
}

@Table({ tableName: "user_doctors" })
export class Doctor extends Model<Doctor, DoctorCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique IIN of the doctor" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  iin: number;

  @ApiProperty({
    example: "Abylaikhan",
    description: "Name of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({
    example: "Muratbayev",
    description: "Last name of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({
    example: "",
    description: "Middle name of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  middleName: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "Unique e-mail of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({
    example: "123456",
    description: "Password of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: "+7-778-999-5599",
    description: "Personal phone number of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  phoneNumber: string;

  @ApiProperty({
    example: "Surgeon",
    description: "Speciality of the doctor",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  specialty: string;

  @HasMany(() => Prescription)
  prescriptions: Prescription[];
}
