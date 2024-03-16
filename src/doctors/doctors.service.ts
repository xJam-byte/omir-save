import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Doctor } from "./doctors.model";
import { CreateDoctorDto } from "./Dto/create-doctor-dto";

@Injectable()
export class DoctorsService {
  constructor(@InjectModel(Doctor) private doctorRepository: typeof Doctor) {}

  async createUser(dto: CreateDoctorDto) {
    const user = await this.doctorRepository.create(dto);
    return user;
  }
  async getAllUsers() {
    const users = await this.doctorRepository.findAll();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.doctorRepository.findOne({
      where: { email: email },
      include: { all: true },
    });

    return user;
  }
}
