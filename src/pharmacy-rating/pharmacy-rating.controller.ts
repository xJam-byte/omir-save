import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { PharmacyRatingService } from "./pharmacy-rating.service";
import { CreatePharmRatingDto } from "./Dto/create-pharmacy-rating.dto";

@Controller("pharmacy-rating")
export class PharmacyRatingController {
  constructor(private ratingService: PharmacyRatingService) {}

  @Post()
  create(@Body() dto: CreatePharmRatingDto) {
    return this.ratingService.createRating(dto);
  }

  @Get()
  getAll(@Query("id") id: number) {
    return this.ratingService.getAllRatingOfPharm(id);
  }
}
