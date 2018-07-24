import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent, ProductListComponent, ProductFormComponent, ReviewsComponent } from '.';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { ProductsRoutingModule } from './products-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductFormComponent,
    OrderByPipe,
    ReviewsComponent
  ],
  exports: [
    ProductListComponent,
    ProductFormComponent,
    ReviewsComponent
  ]
})
export class ProductsModule { }
