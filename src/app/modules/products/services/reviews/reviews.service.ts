import { Injectable } from '@angular/core';
import { ProductsService } from '../product/products.service';

@Injectable()
export class ReviewsService {
  isDisplayed = false;

  constructor(private productsService: ProductsService) { }

  getReviews(id: string): Array<string> {
    return this.productsService.get(id).reviews;
  }

}
