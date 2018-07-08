import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../enums/category.enum';
import { BaseProductModel } from '../../models/base-product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: BaseProductModel;

  constructor() { }

  ngOnInit() {  }
}
