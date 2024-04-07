import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ShoppingCartService } from "./shopping_cart.service";
import { CreateCartDto } from "./Dto/create-cart.dto";

@Controller("cart")
export class ShoppingCartController {
  constructor(private cartService: ShoppingCartService) {}

  @Post()
  create(@Body() dto: CreateCartDto) {
    return this.cartService.pushToCart(dto);
  }

  @Get()
  getAllById(@Query("user_id") id: number) {
    return this.cartService.getAll(id);
  }
}
