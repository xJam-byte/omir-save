import { Body, Controller, Get, Post } from "@nestjs/common";
import { MedicationService } from "./medication.service";
import { CreateMedicationDto } from "./Dto/create-medication-dto";

@Controller("medication")
export class MedicationController {
  constructor(private medicService: MedicationService) {}

  @Post()
  create(@Body() dto: CreateMedicationDto) {
    return this.medicService.createMedic(dto);
  }

  @Get()
  getAll() {
    return this.medicService.getAllMedics();
  }
}
