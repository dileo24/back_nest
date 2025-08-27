import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProdDto } from 'src/dtos/create-prod.dto';
import { Prod } from 'src/interfaces/prod.interface';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async findAll(): Promise<Prod[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return `This action find a product with id: ${id}`;
  }

  @Get('filtered')
  @HttpCode(HttpStatus.OK)
  async findAllFiltered(@Query('code') code: string) {
    return `This action returns products filtered by code: ${code}.`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProdDto: CreateProdDto) {
    this.productsService.create(createProdDto);

    return { message: 'Product created successfully' };
  }
}
