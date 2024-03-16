import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Pharmacy } from "./pharamacies.model";
import { CreatePharmacyDto } from "./Dto/create-pharamacy-dto";

@Injectable()
export class PharamaciesService {
  constructor(
    @InjectModel(Pharmacy) private pharmRepository: typeof Pharmacy
  ) {}
  async createPharm(dto: CreatePharmacyDto) {
    const user = await this.pharmRepository.create(dto);
    return user;
  }
  async getAllUsers() {
    const users = await this.pharmRepository.findAll();
    return users;
  }
}
