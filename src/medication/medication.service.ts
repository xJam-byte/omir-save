import { Injectable } from "@nestjs/common";
import { Medication } from "./medication.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreateMedicationDto } from "./Dto/create-medication-dto";

@Injectable()
export class MedicationService {
  constructor(
    @InjectModel(Medication) private medRepository: typeof Medication
  ) {}

  async createMedic(dto: CreateMedicationDto) {
    const user = await this.medRepository.create(dto);
    return user;
  }
  async getAllMedics() {
    const users = await this.medRepository.findAll();
    return users;
  }
}
