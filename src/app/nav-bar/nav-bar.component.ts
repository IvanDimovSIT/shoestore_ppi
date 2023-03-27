//import { Component } from '@angular/core';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoeItemData } from 'src/models/ShoeItemData';
import { ShoppingCart } from 'src/models/ShoppingCart';
import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations'; // animations
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  public constructor(private cookieService: CookieService){
      ShoppingCart.setSessionStorage();
  }

  public getCartItemsCount():number{
    return ShoppingCart.getTotalItemCount();
  }

}