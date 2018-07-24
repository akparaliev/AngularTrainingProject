import { ProductModel } from '../models/product.model';
import { Category } from '../enums/category.enum';

export const PRODUCTS: ProductModel[] = [
  new ProductModel('id1', 'product1', 'desc1', 1, Category.Clothes, true, ['provider1', 'provider2'], ['review1']),
  new ProductModel('id2', 'product2', 'desc2', 10, Category.Electronics, false, ['provider4', 'provider2'], ['review2', 'review3']),
  new ProductModel('id3', 'product3', 'desc3', 100, Category.Toys, true, ['provider3', 'provider2'], [] )
];
