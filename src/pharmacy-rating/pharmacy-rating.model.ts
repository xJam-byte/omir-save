import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Customer } from "src/customers/customers.model";
import { Pharmacy } from "src/pharamacies/pharamacies.model";

interface PharmacyRatingAttributes {
  rating: number;
  comment: string;
  pharmacyId: number;
  userIIN: number;
}

@Table({ tableName: "pharmacy_ratings" })
export class PharmacyRating extends Model<
  PharmacyRating,
  PharmacyRatingAttributes
> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.FLOAT, allowNull: false })
  rating: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  comment: string;

  @ForeignKey(() => Pharmacy)
  @Column({ type: DataType.INTEGER, allowNull: false })
  pharmacyId: number;

  @BelongsTo(() => Pharmacy)
  pharmacy: Pharmacy;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER, allowNull: false })
  userIIN: number;

  @BelongsTo(() => Customer)
  user: Customer;
}
