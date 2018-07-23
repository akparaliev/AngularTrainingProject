import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { ProductsModule } from './modules/products/products.module';
import { CoreModule } from './modules/core/core.module';
import { OrdersModule } from './modules/orders/orders.module';
import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';
import { CartListComponent } from './modules/cart/components/cart-list/cart-list.component';
import { CartItemComponent } from './modules/cart/components/cart-item/cart-item.component';
import { CartService } from './modules/cart/services/cart/cart.service';
import { ProductsService } from './modules/products/services/product/products.service';




@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CoreModule,
    OrdersModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    CartService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
}

}
