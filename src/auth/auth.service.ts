import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateCustomerDto } from "src/customers/Dto/create.customer.dto";
import { CustomersService } from "src/customers/customers.service";
import * as bcrypt from "bcryptjs";
import { Customer } from "src/customers/customers.model";
import { log } from "console";
import { LoginCustomerDto } from "./login.customer.dto";

@Injectable()
export class AuthService {
  constructor(
    private customerService: CustomersService,
    private jwtService: JwtService
  ) {}
  async login(customerDto: LoginCustomerDto) {
    const customer = await this.validateCustomer(customerDto);
    // console.log("token is:",this.generateToken(customer));
    const token = await this.generateToken(customer);
    return token;
    // return {token : await this.generateToken(customer), user: customer};
    // return this.generateToken(customer);

  }

  async registration(customerDto: CreateCustomerDto) {
    const candidate = await this.customerService.getUserByIIN(customerDto.iin);

    if (candidate) {
      throw new HttpException(
        "Пользователь с таким iin уже существует",
        HttpStatus.BAD_REQUEST
      );
    }

    const hash = await bcrypt.hash(customerDto.password, 5);
    const customer = await this.customerService.createUser({
      ...customerDto,
      password: hash,
    });
    // return {token : this.generateToken(customer), user: customer};
    return await this.generateToken(customer);
    // return this.generateToken(customer);
  }

  private async generateToken(user: Customer) {
    const payload = { email: user.email, id: user.iin };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateCustomer(customerDto: LoginCustomerDto) {
    const customer = await this.customerService.getUserByEmail(customerDto.email);
    const password = await bcrypt.compare(
      customerDto.password,
      customer.password
    );

    if (customer && password) {
      return customer;
    }
    throw new UnauthorizedException({ messade: "НЕККОРЕКТНО" });
  }
}
