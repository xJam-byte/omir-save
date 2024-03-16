import { Module } from "@nestjs/common";
import { PharamaciesController } from "./pharamacies.controller";
import { PharamaciesService } from "./pharamacies.service";
import { Pharmacy } from "./pharamacies.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [PharamaciesController],
  providers: [PharamaciesService],
  imports: [SequelizeModule.forFeature([Pharmacy])],
})
export class PharamaciesModule {}
