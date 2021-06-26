import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {
    path:'basket',
    component:BasketComponent
  },
  {
    path:'shop',
    component:ShopComponent
  },
  {
    path:'',
    redirectTo:'/shop',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
