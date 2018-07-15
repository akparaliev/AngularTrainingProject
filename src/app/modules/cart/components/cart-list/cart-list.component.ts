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

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {}

  getProductsInCart() {
    return Array.from(this.cartService.productsInCart.keys());
  }

  getProduct(id: string): BaseProductModel {
    return this.productsService.get(id);
  }

  getProductCount(id: string): number {
    return this.cartService.getProductCount(id);
  }

  getProductsCount(): number {
    return this.cartService.productsCount();
  }

  getTotalPrice() {
    return this.cartService.productsTotalPrice();
  }

  changeProductCount($event, productId: string) {
    this.cartService.setProductCount(productId, $event.newValue);
  }
}


