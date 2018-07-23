import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { BaseProductModel } from '../../models/base-product.model';
import { CartService } from '../../../cart/services/cart/cart.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Promise<BaseProductModel[]>;

  constructor(private router: Router,
              private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getAll();
  }

  ngOnDestroy() {
    this.products = null;
  }

  onOpenProduct(product: ProductModel) {
    const link = ['/products', product.id];
    this.router.navigate(link);
  }
  onBuy(id: string) {
    this.cartService.addProductToCart(id);
  }

}
