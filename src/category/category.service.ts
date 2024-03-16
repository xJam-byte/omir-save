import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./category.model";
import { CreateCategoryDto } from "./Dto/create-category-dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category
  ) {}

  async createMedic(dto: CreateCategoryDto) {
    const user = await this.categoryRepository.create(dto);
    return user;
  }
  async getAllMedics() {
    const users = await this.categoryRepository.findAll();
    return users;
  }
}
