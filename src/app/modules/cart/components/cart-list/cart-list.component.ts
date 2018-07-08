import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../products/services/product/products.service';
import { BaseProductModel } from '../../../products/models/base-product.model';
import { CartService } from '../../../../modules/cart/services/cart/cart.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(private productsService: ProductsService, public cartService: CartService) { }

  ngOnInit() {}

  getProductsInCart() {
    return Array.from(this.cartService.productsInCart.keys());
  }

  getProduct(id: string): BaseProductModel {
    return this.productsService.get(id);
  }

  getProductCount(id: string): number {
    return this.cartService.productsInCart.get(id);
  }

  getTotalPrice() {
    let total = 0;
    this.cartService.productsInCart.forEach((count: number, productId: string) => {
      total += this.productsService.get(productId).price * count;
    });
    return total;
  }

  changeProductCount($event, productId: string) {
    this.cartService.productsInCart.set(productId, $event.newValue);
  }
}


