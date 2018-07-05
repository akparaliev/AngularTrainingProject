import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/app/mocks/products.mock';
import { BaseProductModel } from '../../models/product/base-product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll() {
      return PRODUCTS;
  }

  get(id: string) {
      return PRODUCTS.filter(x => x.id === id)[0];
  }
}
