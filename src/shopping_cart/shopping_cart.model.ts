import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Customer } from "src/customers/customers.model";
import { Medication } from "src/medication/medication.model";

interface CartCreationAttrs {
  customer_id: number;
  medication_id: number;
  quantity: number;
}

@Table({ tableName: "carts" })
export class Cart extends Model<Cart, CartCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Customer)
  @Column
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @ForeignKey(() => Medication)
  @Column
  medication_id: number;

  @BelongsTo(() => Medication)
  medication: Medication;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;
}
