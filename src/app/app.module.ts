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


@NgModule({
  declarations: [
    AppComponent,
    ShoesListComponent,
    NavBarComponent,
    ShoePageComponent,
    StoreComponent,
    SizeButtonsComponent
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
