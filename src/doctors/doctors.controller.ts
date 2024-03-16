import { Body, Controller, Get, Post } from "@nestjs/common";
import { DoctorsService } from "./doctors.service";
import { CreateDoctorDto } from "./Dto/create-doctor-dto";

@Controller("doctors")
export class DoctorsController {
  constructor(private doctorsService: DoctorsService) {}

  @Post()
  create(@Body() userDto: CreateDoctorDto) {
    return this.doctorsService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.doctorsService.getAllUsers();
  }
}
