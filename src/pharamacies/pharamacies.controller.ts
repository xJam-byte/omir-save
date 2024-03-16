import { Body, Controller, Get, Post } from "@nestjs/common";
import { PharamaciesService } from "./pharamacies.service";
import { CreatePharmacyDto } from "./Dto/create-pharamacy-dto";

@Controller("pharamacies")
export class PharamaciesController {
  constructor(private pharmService: PharamaciesService) {}

  @Post()
  create(@Body() dto: CreatePharmacyDto) {
    return this.pharmService.createPharm(dto);
  }

  @Get()
  getAll() {
    return this.pharmService.getAllUsers();
  }
}
