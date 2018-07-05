import { Injectable } from '@angular/core';
import { BaseProductModel } from '../../models/product/base-product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsInCart: Map<string, number>;

  constructor() {
    this.productsInCart = new Map<string, number>();
  }

  addProductToCart(id: string) {
    if (this.productsInCart.has(id)) {
      let newValue = this.productsInCart.get(id);

      this.productsInCart.set(id, ++newValue );
    } else {
      this.productsInCart.set(id, 1);
    }
  }

  count() {
    return this.productsInCart.size;
  }
}
