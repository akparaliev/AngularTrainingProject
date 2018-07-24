import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseProductModel } from '../../models/base-product.model';
import { ProductsService } from '../../services/product/products.service';
import { ProductModel } from '../../models/product.model';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: BaseProductModel;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.product = new ProductModel('', '', '', 0, null, false, null, null);

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => (Promise.resolve(this.productsService.get(params.get('productId'))))))
      .subscribe(
        product => {
          this.product = product;
        },
        err => console.log(err)
    );
  }
}


