import { Injectable } from '@nestjs/common';
import { Prod } from 'src/interfaces/prod.interface';

@Injectable()
export class ProductsService {
  private readonly prods: Prod[] = [];

  create(prod: Prod) {
    this.prods.push(prod);
  }

  findAll(): Prod[] {
    return this.prods;
  }
}
