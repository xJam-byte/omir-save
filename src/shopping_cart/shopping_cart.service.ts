import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./Dto/create-cart.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./shopping_cart.model";

@Injectable()
export class ShoppingCartService {
  constructor(@InjectModel(Cart) private cartRepository: typeof Cart) {}

  async pushToCart(dto: CreateCartDto) {
    return this.cartRepository.create(dto);
  }
  async getAll() {
    return await this.cartRepository.findAll();
  }
}
