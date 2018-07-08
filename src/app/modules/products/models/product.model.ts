import { BaseProductModel } from './base-product.model';
import { Category } from '../enums/category.enum';

export class ProductModel implements BaseProductModel {
 constructor(public id: string, public name: string, public description: string,
     public price: number, public category: Category,
     public isAvailable: boolean, public providers: string[]) {
 }
}
