import { Injectable } from '@angular/core';
import { ProductsService } from '../../../products/services/product/products.service';

@Injectable()
export class CartService {
  productsInCart: Map<string, number>;

  constructor(private productsService: ProductsService) {
    this.productsInCart = new Map<string, number>();
  }

  addProductToCart(id: string, count = 1 ): void {
    if (this.productsInCart.has(id)) {
      const currentCount = this.productsInCart.get(id);
      this.productsInCart.set(id, currentCount + count);
    } else {
      this.productsInCart.set(id, 1);
    }
  }

  getProductCount(id: string): number {
    return this.productsInCart.get(id);
  }

  productsCount(): number {
      return this.productsInCart.size;
  }

  productsTotalPrice(): number {
      let total = 0;
      this.productsInCart.forEach((count: number, productId: string) => {
         total += this.productsService.get(productId).price * count;
      });
      return total;
  }

  removeProductFromCart(id: string) {
      if (this.productsInCart.has(id)) {
        this.productsInCart.delete(id);
      }
  }

  setProductCount(id: string, count: number) {
    this.productsInCart.set(id, count);
  }

  clearCart() {
    this.productsInCart = new Map<string, number>();
  }
}
