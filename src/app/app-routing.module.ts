import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartPageComponent } from './cart-page-components/cart-page/cart-page.component';
import { ShoePageComponent } from './shoe-page-components/shoe-page/shoe-page.component';
import { StorePageComponent } from './store-components/store-page/store-page.component';
import { AboutUsPageComponent } from './information-pages/about-us-page/about-us-page.component';
import { FaqPageComponent } from './information-pages/faq-page/faq-page.component';
import { ContactsPageComponent } from './information-pages/contacts-page/contacts-page.component';
import { CheckoutPageComponent } from './checkout-page-components/checkout-page/checkout-page.component';
import { LoginPageComponent } from './login-page-components/login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page-components/registration-page/registration-page.component';
import { ProfilePageComponent } from './profile-page-components/profile-page/profile-page.component';
import { PurchaseCompletePageComponent } from './purchase-complete-page/purchase-complete-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { PrivacyPolicyPageComponent } from './information-pages/privacy-policy-page/privacy-policy-page.component';

// Routing between pages
const routes: Routes = [
  { path: '', redirectTo: '/store/A/1/A/A/A', pathMatch: 'full' },
  { path: 'shoe-page/:id', component: ShoePageComponent }, 
  { path: 'store/:g/:p/:brand/:price/:color', component: StorePageComponent}, //use path variables
  { path: 'cart', component: CartPageComponent},
  { path: 'checkout', component: CheckoutPageComponent},
  { path: 'purchase-complete', component: PurchaseCompletePageComponent},
  { path: 'payment', component: PaymentPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'registration', component: RegistrationPageComponent},
  { path: 'profile', component: ProfilePageComponent},
  { path: 'about-us', component: AboutUsPageComponent},
  { path: 'FAQ', component: FaqPageComponent},
  { path: 'contacts', component: ContactsPageComponent},
  { path: 'privacy-policy', component: PrivacyPolicyPageComponent},
  { path: '**', component: StorePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
