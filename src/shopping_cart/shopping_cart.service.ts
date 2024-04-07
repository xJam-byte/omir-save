import { Injectable } from "@nestjs/common";
import { CreateCartDto } from "./Dto/create-cart.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Cart } from "./shopping_cart.model";
import { Medication } from "src/medication/medication.model";
import { MedicationService } from "src/medication/medication.service";

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(Cart) private cartRepository: typeof Cart,
    private medicRepository: MedicationService
  ) {}

  async pushToCart(dto: CreateCartDto) {
    return this.cartRepository.create(dto);
  }

  async getAll(id: number) {
    const medics = await this.cartRepository.findAll({
      where: { customer_id: id },
    });

    const infomed = [];
    for (const m of medics) {
      const med = await this.medicRepository.getMedicationById(m.medication_id);
      infomed.push(med[0]);
    }

    return infomed;
  }
}
