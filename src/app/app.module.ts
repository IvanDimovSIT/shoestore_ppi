import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListComponent } from './store-components/shoes-list/shoes-list.component';
import { NavBarComponent } from './standard-page-components/nav-bar/nav-bar.component';
import { ShoePageComponent } from './shoe-page-components/shoe-page/shoe-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StorePageComponent } from './store-components/store-page/store-page.component';
import { SizeButtonsComponent } from './shoe-page-components/size-buttons/size-buttons.component';
import { CartPageComponent } from './cart-page-components/cart-page/cart-page.component';
import { CartItemsListComponent } from './cart-page-components/cart-items-list/cart-items-list.component';
import { CartItemsCheckoutComponent } from './cart-page-components/cart-items-checkout/cart-items-checkout.component';
import { FooterBarComponent } from './standard-page-components/footer-bar/footer-bar.component';
import { AboutUsPageComponent } from './information-pages/about-us-page/about-us-page.component';
import { FaqPageComponent } from './information-pages/faq-page/faq-page.component';
import { ShoeFiltersComponent } from './store-components/shoe-filters/shoe-filters.component';
import { ContactsPageComponent } from './information-pages/contacts-page/contacts-page.component';
import { CheckoutPageComponent } from './checkout-page-components/checkout-page/checkout-page.component';
import { CheckoutPriceComponent } from './checkout-page-components/checkout-price/checkout-price.component';
import { CheckoutFormComponent } from './checkout-page-components/checkout-form/checkout-form.component';
import { LoginPageComponent } from './login-page-components/login-page/login-page.component';
import { LoginFormComponent } from './login-page-components/login-form/login-form.component';
import { RegistrationPageComponent } from './registration-page-components/registration-page/registration-page.component';
import { RegistrationFormComponent } from './registration-page-components/registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';
import { BasePageComponent } from './base-page/base-page.component';
import { ProfilePageComponent } from './profile-page-components/profile-page/profile-page.component';
import { EditProfileFormComponent } from './profile-page-components/edit-profile-form/edit-profile-form.component';
import { NotificationComponent } from './notification/notification.component';
import { PurchaseCompletePageComponent } from './purchase-complete-page/purchase-complete-page.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { TotalPriceService } from 'src/service/TotalPriceService';
import { PaypalConfigService } from 'src/service/PaypalConfigService';
import { NgxPayPalModule } from 'ngx-paypal';


@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    NavBarComponent,
    ShoePageComponent,
    StorePageComponent,
    SizeButtonsComponent,
    CartPageComponent,
    CartItemsListComponent,
    CartItemsCheckoutComponent,
    FooterBarComponent,
    AboutUsPageComponent,
    FaqPageComponent,
    ShoeFiltersComponent,
    ContactsPageComponent,
    CheckoutPageComponent,
    CheckoutPriceComponent,
    CheckoutFormComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    BasePageComponent,
    ProfilePageComponent,
    EditProfileFormComponent,
    NotificationComponent,
    PurchaseCompletePageComponent,
    PaymentPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule 
  ],
  providers: [
    TotalPriceService,
    PaypalConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
