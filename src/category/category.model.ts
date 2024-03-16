import { Column, DataType, Model, Table } from "sequelize-typescript";

interface CategoryAttributes {
  categoryName: string;
}

@Table({ tableName: "categories" })
export class Category extends Model<Category, CategoryAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  categoryId: number;

  @Column({ type: DataType.STRING, allowNull: false })
  categoryName: string;
}
