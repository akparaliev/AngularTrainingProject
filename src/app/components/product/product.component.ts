import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BaseProductModel } from '../../models/product/base-product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: BaseProductModel;
  @Input() readonly: boolean;
  @Output() addProductEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {  }

  onBuy() {
    console.log(`${this.product.name} was bought`);
    this.addProductEvent.emit({ event: event, productId: this.product.id });
  }
}
