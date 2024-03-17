import { Module } from "@nestjs/common";
import { PharamaciesController } from "./pharamacies.controller";
import { PharamaciesService } from "./pharamacies.service";
import { Pharmacy } from "./pharamacies.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { PharmacyRatingService } from "src/pharmacy-rating/pharmacy-rating.service";
import { PharmacyRatingModule } from "src/pharmacy-rating/pharmacy-rating.module";

@Module({
  controllers: [PharamaciesController],
  providers: [PharamaciesService],
  imports: [PharmacyRatingModule, SequelizeModule.forFeature([Pharmacy])],
})
export class PharamaciesModule {}
