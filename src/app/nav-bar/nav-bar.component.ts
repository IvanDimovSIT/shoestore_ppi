
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  public constructor(private cookieService: CookieService, private router: Router){
    ShoppingCart.setSessionStorage();
  }

  public getCartItemsCount():number{
    return ShoppingCart.getTotalItemCount();
  }

  public navigateStore(gender: string){
    console.log("navigating to:", gender);
    this.router.navigate(['/store', gender], { replaceUrl: true });
  }

}
