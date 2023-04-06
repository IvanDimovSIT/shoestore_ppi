import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { StorePageComponent } from './store-page/store-page.component';

// Routing between pages
const routes: Routes = [
  { path: '', redirectTo: '/store/A/1', pathMatch: 'full' },
  { path: 'shoe-page/:id', component: ShoePageComponent }, //using GET method
  { path: 'store/:g/:p', component: StorePageComponent},
  { path: 'cart', component: CartPageComponent},
  { path: '**', component: StorePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
