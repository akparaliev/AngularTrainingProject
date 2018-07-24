import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent } from './modules/cart';
import { ProductListComponent, ProductFormComponent, ReviewsComponent } from './modules/products';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
    children: [
      {
        path: 'reviews/:productId',
        component: ReviewsComponent,
        outlet: 'popup'
      },
    ]
  },
  {
    path: 'products/:productId',
    component: ProductFormComponent,
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
