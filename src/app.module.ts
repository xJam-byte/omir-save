import { Module } from "@nestjs/common";
import { CustomersModule } from "./customers/customers.module";
import { Customer } from "./customers/customers.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { ConfigModule } from "@nestjs/config";
import { DoctorsModule } from "./doctors/doctors.module";
import { PharamaciesModule } from "./pharamacies/pharamacies.module";
import { Doctor } from "./doctors/doctors.model";
import { Pharmacy } from "./pharamacies/pharamacies.model";
import { PrescriptionsModule } from "./prescriptions/prescriptions.module";
import { MedicationModule } from "./medication/medication.module";
import { ShoppingCartModule } from "./shopping_cart/shopping_cart.module";
import { Prescription } from "./prescriptions/prescriptions.model";
import { Medication } from "./medication/medication.model";
import { Cart } from "./shopping_cart/shopping_cart.model";
import { AuthModule } from "./auth/auth.module";
import { CategoryModule } from "./category/category.module";
import { Category } from "./category/category.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),

    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        Customer,
        Doctor,
        Pharmacy,
        Prescription,
        Medication,
        Cart,
        Category,
      ],
      autoLoadModels: true,
    }),
    CustomersModule,
    DoctorsModule,
    PharamaciesModule,
    PrescriptionsModule,
    MedicationModule,
    ShoppingCartModule,
    AuthModule,
    CategoryModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
