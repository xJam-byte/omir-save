import { Module } from "@nestjs/common";
import { PrescriptionsController } from "./prescriptions.controller";
import { PrescriptionsService } from "./prescriptions.service";
import { Prescription } from "./prescriptions.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [PrescriptionsController],
  providers: [PrescriptionsService],
  imports: [SequelizeModule.forFeature([Prescription])],
})
export class PrescriptionsModule {}
