import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  productsInCart: Map<string, number>;

  constructor() {
    this.productsInCart = new Map<string, number>();
  }

  addProductToCart(id: string) {
    if (this.productsInCart.has(id)) {
      let count = this.productsInCart.get(id);
      this.productsInCart.set(id, ++count );
    } else {
      this.productsInCart.set(id, 1);
    }
  }

}
