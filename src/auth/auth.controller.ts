import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCustomerDto } from "src/customers/Dto/create.customer.dto";
import { AuthService } from "./auth.service";
import { LoginCustomerDto } from "./login.customer.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login/customer")
  login(@Body() customerDto: LoginCustomerDto) {
    return this.authService.login(customerDto);
  }

  @Post("/registration/customer")
  async registration(@Body() customerDto: CreateCustomerDto) {
    return this.authService.registration(customerDto);
  }
}
