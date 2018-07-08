import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { BaseProductModel } from '../../models/base-product.model';
import { CartService } from '../../../cart/services/cart/cart.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(ProductComponent) productChild: ProductComponent;

  products: BaseProductModel[];
  popularProduct: string;

  constructor(private productsService: ProductsService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productsService.getAll();
  }

  ngOnDestroy() {
    this.products = null;
  }

  onBuy(id: string) {
    this.cartService.addProductToCart(id);
  }

  ngAfterViewInit() {
    this.popularProduct = this.productChild.product.name;
  }

}
