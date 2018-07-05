import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/product/products.service';
import { BaseProductModel } from '../../models/product/base-product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: BaseProductModel[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.productsService.getAll();
  }

}
