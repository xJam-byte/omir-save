import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./Dto/create-category-dto";

@Controller("category")
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createMedic(dto);
  }

  @Get()
  getAll() {
    return this.categoryService.getAllMedics();
  }
}
