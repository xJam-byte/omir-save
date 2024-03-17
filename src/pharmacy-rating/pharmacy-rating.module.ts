import { Module } from "@nestjs/common";
import { PharmacyRatingController } from "./pharmacy-rating.controller";
import { PharmacyRatingService } from "./pharmacy-rating.service";
import { PharmacyRating } from "./pharmacy-rating.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [PharmacyRatingController],
  providers: [PharmacyRatingService],
  imports: [SequelizeModule.forFeature([PharmacyRating])],
  exports: [PharmacyRatingService],
})
export class PharmacyRatingModule {}
