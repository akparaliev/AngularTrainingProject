import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { BaseProductModel } from '../../../products/models/base-product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: BaseProductModel;
  @Input() count: number;
  @Output() countChange  = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onCountChange(value: string) {
    this.countChange.emit({ event: event, newValue: value });
  }
}
