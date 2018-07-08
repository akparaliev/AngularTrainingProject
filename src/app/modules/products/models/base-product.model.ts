import { Category } from '../enums/category.enum';
export interface BaseProductModel {
    id: string;
    name: string;
    description: string;
    price: number;
    category: Category;
    isAvailable: boolean;
    providers: string[];
}
