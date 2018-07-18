import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent, ProductListComponent } from '.';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    OrderByPipe
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
