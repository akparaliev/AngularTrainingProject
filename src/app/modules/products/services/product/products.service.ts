import { Injectable } from '@angular/core';
import { PRODUCTS } from '../../mocks/products.mock';
import { BaseProductModel } from '../../models/base-product.model';

@Injectable()
export class ProductsService {

  constructor() {
  }

  getAll(): Promise<BaseProductModel[]> {
    return new Promise((resolve) => { resolve(PRODUCTS); });
  }

  get(id: string) {
    return PRODUCTS.filter(x => x.id === id)[0];
  }

}
