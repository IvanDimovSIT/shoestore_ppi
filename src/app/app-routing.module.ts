import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { StoreComponent } from './store/store.component';

// Routing between pages
const routes: Routes = [
  { path: '', redirectTo: '/store', pathMatch: 'full' },
  { path: 'shoe-page/:id', component: ShoePageComponent }, //using GET method
  { path: 'store', component: StoreComponent},
  { path: 'cart', component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
