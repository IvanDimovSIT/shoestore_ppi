import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { StorePageComponent } from './store-page/store-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

// Routing between pages
const routes: Routes = [
  { path: '', redirectTo: '/store/A/1/A/A', pathMatch: 'full' },
  { path: 'shoe-page/:id', component: ShoePageComponent }, //using GET method
  { path: 'store/:g/:p/:price/:color', component: StorePageComponent},
  { path: 'cart', component: CartPageComponent},
  { path: 'about-us', component: AboutUsPageComponent},
  { path: 'FAQ', component: FaqPageComponent},
  { path: 'contacts', component: ContactsPageComponent},
  { path: '**', component: StorePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
