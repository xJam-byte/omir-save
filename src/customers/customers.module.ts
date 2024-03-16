import { Module } from "@nestjs/common";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";
import { Customer } from "./customers.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [SequelizeModule.forFeature([Customer])],
  exports: [CustomersService],
})
export class CustomersModule {}
