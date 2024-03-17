import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  HasOne,
  HasMany,
} from "sequelize-typescript";
import { Prescription } from "src/prescriptions/prescriptions.model";
import { Cart } from "src/shopping_cart/shopping_cart.model";

interface CustomerCreationAttrs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  iin: string;
}

@Table({ tableName: "user_customers" })
export class Customer extends Model<Customer, CustomerCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique IIN of the customer" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Abylaikhan",
    description: "Name of the customer",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({
    example: "Muratbayev",
    description: "Last name of the customer",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({
    example: "user@gmail.com",
    description: "Unique e-mail of the customer",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({
    example: "123456",
    description: "Password of the customer",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: "+7-778-999-5599",
    description: "Personal phone number of the customer",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  phoneNumber: string;

  @ApiProperty({
    example: "Kaldayakova 45",
    description: "Address of the customer",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @Column({ type: DataType.STRING, allowNull: false })
  iin: string;

  @HasMany(() => Prescription)
  prescriptions: Prescription[];

  @HasOne(() => Cart)
  shoppingCart: Cart;
}
