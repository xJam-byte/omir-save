import { Module } from "@nestjs/common";
import { CustomersController } from "./customers.controller";
import { CustomersService } from "./customers.service";
import { Customer } from "./customers.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { JwtModule } from "@nestjs/jwt";

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
  imports: [SequelizeModule.forFeature([Customer]),JwtModule.register({
    secret: process.env.PRIVATE_KEY || "secret",
    signOptions: {
      expiresIn: "24h",
    },
  }),],
  exports: [CustomersService],
})
export class CustomersModule {}
