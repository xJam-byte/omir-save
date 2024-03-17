import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CustomersService } from "./customers.service";
import { Customer } from "./customers.model";
import { CreateCustomerDto } from "./Dto/create.customer.dto";

@ApiTags("Customers")
@Controller("customers")
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @ApiOperation({ summary: "Creating a new user" })
  @ApiResponse({ status: 200, type: Customer })
  @Post()
  create(@Body() userDto: CreateCustomerDto) {
    return this.customersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Getting all users" })
  @ApiResponse({ status: 200, type: [Customer] })
  @Get()
  getAll() {
    return this.customersService.getAllUsers();
  }

  @Post("/update/contacts")
  updateNameSurnamePhone(@Body() user: any) {
    return this.customersService.updateNameSurnamePhone(user);
  }

  @Post("/update/email")
  updateEmail(@Body() user: any) {
    return this.customersService.updateEmail(user);
  }

  @Post("/update/password")
  updatePassword(@Body() user: any) {
    return this.customersService.updatePassword(user);
  }
}
