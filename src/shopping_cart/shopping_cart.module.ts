import { Module } from "@nestjs/common";
import { ShoppingCartController } from "./shopping_cart.controller";
import { ShoppingCartService } from "./shopping_cart.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cart } from "./shopping_cart.model";
import { MedicationModule } from "src/medication/medication.module";

@Module({
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
  imports: [SequelizeModule.forFeature([Cart]), MedicationModule],
})
export class ShoppingCartModule {}
