import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./customers.model";
import { CreateCustomerDto } from "./Dto/create.customer.dto";

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer) private customerRepository: typeof Customer
  ) {}

  async createUser(dto: CreateCustomerDto) {
    const user = await this.customerRepository.create(dto);
    return user;
  }
  async getAllUsers() {
    const users = await this.customerRepository.findAll();
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.customerRepository.findOne({
      where: { email: email },
      include: { all: true },
    });

    return user;
  }
}
