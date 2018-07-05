import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../enums/category.enum';
import { BaseProductModel } from '../../models/product/base-product.model';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: BaseProductModel;
  @Input() readonly: boolean;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {  }

  onBuy() {
    console.log(`${this.product.name} was bought`);
    this.cartService.addProductToCart(this.product.id);
  }
}
