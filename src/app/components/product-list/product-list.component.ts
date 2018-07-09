import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { BaseProductModel } from '../../models/product/base-product.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: BaseProductModel[];

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getAll();
  }

  addProductToCart($event) {
    this.cartService.addProductToCart($event.productId);
  }

}
