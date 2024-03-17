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

  async updateNameSurnamePhone(user: any) {
    const customer = await this.customerRepository.findOne({
      where: { iin: user.iin },
    });

    if (!customer) {
      throw new Error("Клиент с указанным ИИН не найден.");
    }
    const e = await customer.update(
      {
        firstName: user.name,
        lastName: user.surname,
        phoneNumber: user.number,
      },
      { where: { id: customer.id } }
    );

    await customer.save();
    return customer;
  }
}
