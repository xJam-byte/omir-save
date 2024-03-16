import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Customer } from "src/customers/customers.model";
import { Doctor } from "src/doctors/doctors.model";
import { Medication } from "src/medication/medication.model";

interface PrescriptionCreationAttrs {
  name: string;
  creation_date: string;
  expiration_date: string;
  medication_id: number;
  customer_id: number;
  doctor_id: number;
}

@Table({ tableName: "prescriptions" })
export class Prescription extends Model<
  Prescription,
  PrescriptionCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  creation_date: string;

  @Column({ type: DataType.STRING, allowNull: false })
  expiration_date: string;

  @ForeignKey(() => Customer)
  @Column
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @ForeignKey(() => Doctor)
  @Column
  doctor_id: number;

  @BelongsTo(() => Doctor)
  doctor: Doctor;
}
