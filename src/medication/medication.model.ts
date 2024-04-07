import { ApiProperty } from "@nestjs/swagger";
import {
  Column,
  Model,
  DataType,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Category } from "src/category/category.model";
import { Pharmacy } from "src/pharamacies/pharamacies.model";
import { Cart } from "src/shopping_cart/shopping_cart.model";

interface MedicationCreationAttrs {
  name: string;
  description: string;
  article_number: string;
  picture: string;
  priority: number;
  price: number;
  manufacturer: string;
  country: string;
  allowed_dosage: string;
  pharmacy_id: number;
  category_id: number;
  quantity: number;
}

@Table({ tableName: "medications" })
export class Medication extends Model<Medication, MedicationCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique IIN of the prescription" })
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
  description: string;

  @Column({ type: DataType.STRING, allowNull: false })
  article_number: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @Column({ type: DataType.STRING, allowNull: true })
  allowed_dosage: string;

  @Column({ type: DataType.STRING, allowNull: true })
  picture: string;
  @Column({ type: DataType.STRING, allowNull: true })
  manufacturer: string;
  @Column({ type: DataType.STRING, allowNull: true })
  country: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  priority: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  quantity: number;

  @ForeignKey(() => Pharmacy)
  @Column
  pharmacy_id: number;

  @BelongsTo(() => Pharmacy)
  pharmacy: Pharmacy;

  @ForeignKey(() => Cart)
  @Column
  cart_id: number;

  @BelongsTo(() => Cart)
  shoppingCart: Cart;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  category_id: number;

  @BelongsTo(() => Category)
  category: Category;
}
