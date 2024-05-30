import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Customer } from "./customers.model";
import * as bcrypt from "bcryptjs";
import { CreateCustomerDto } from "./Dto/create.customer.dto";
import { JwtService } from "@nestjs/jwt";
import { log } from "console";

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer) private customerRepository: typeof Customer,
    private jwtService: JwtService
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

  async getUserByToken(token : string){
    log(token)
    const t = this.jwtService.decode(token);
    log("EMAIL IS: ",t.email);
    const uses = await this.getUserByEmail(t.email);
    return uses;
  }

  async getUserById(id: number) {
    const user = await this.customerRepository.findOne({
      where: { id: id },
      include: { all: true },
    });

    return user;
  }

  async getUserByIIN(iin: string) {
    const user = await this.customerRepository.findOne({
      where: { iin: iin },
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

  async updateEmail(user: any) {
    const customer = await this.customerRepository.findOne({
      where: { iin: user.iin },
    });

    if (!customer) {
      throw new Error("Клиент с указанным ИИН не найден.");
    }
    await customer.update(
      {
        email: user.email,
      },
      { where: { id: customer.id } }
    );

    await customer.save();
    return customer;
  }

  async updatePassword(user: any) {
    const customer = await this.customerRepository.findOne({
      where: { iin: user.iin },
    });

    if (!customer) {
      throw new Error("Клиент с указанным ИИН не найден.");
    }

    const hash = await bcrypt.hash(user.password, 5);
    await customer.update({ password: hash }, { where: { id: customer.id } });

    await customer.save();
    return customer;
  }
}
