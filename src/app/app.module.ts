import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShoePageComponent } from './shoe-page/shoe-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreComponent } from './store/store.component';
import { SizeButtonsComponent } from './size-buttons/size-buttons.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CartItemsListComponent } from './cart-items-list/cart-items-list.component';
import { CartItemsCheckoutComponent } from './cart-items-checkout/cart-items-checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    NavBarComponent,
    ShoePageComponent,
    StoreComponent,
    SizeButtonsComponent,
    CartPageComponent,
    CartItemsListComponent,
    CartItemsCheckoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
