import { Module } from "@nestjs/common";
import { MedicationController } from "./medication.controller";
import { MedicationService } from "./medication.service";
import { Medication } from "./medication.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [MedicationController],
  providers: [MedicationService],
  imports: [SequelizeModule.forFeature([Medication])],
  exports: [MedicationService],
})
export class MedicationModule {}
