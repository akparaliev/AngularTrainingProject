import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { BaseProductModel } from '../../models/product/base-product.model';
import { ProductsService } from '../../services/product/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private productService: ProductsService) { }

  ngOnInit() {  }

  getProductsIdsInCart() {
    return Array.from(this.cartService.productsInCart.keys());
  }

  cartCount() {
    return this.cartService.count();
  }

  getProduct(id: string): BaseProductModel {
    return this.productService.get(id);
  }

  getProductCount(id: string): number {
    return this.cartService.productsInCart.get(id);
  }
}
