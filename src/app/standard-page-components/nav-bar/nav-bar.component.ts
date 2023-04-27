
import { ShoeItem } from 'src/model/ShoeItem';
import { ShoeItemData } from 'src/model/ShoeItemData';
import { ShoppingCart } from 'src/model/ShoppingCart';
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
import { ActivatedRoute, Router } from '@angular/router';
import { CurrentUser } from 'src/model/CurrentUser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  public constructor(private router: Router, private route: ActivatedRoute){
    ShoppingCart.setSessionStorage();
  }

  public getLoginButtonText():string{
    return CurrentUser.email === null?"Вход":"Профил";
  }

  public getCartItemsCount():number{
    return ShoppingCart.getTotalItemCount();
  }

  public navigateStore(gender: string){
    console.log("navigating to:", gender);
    this.router.navigate(
      ['/store', gender, '1',
      this.route.snapshot.paramMap.get('brand')===null?'A':this.route.snapshot.paramMap.get('brand'), 
      this.route.snapshot.paramMap.get('price')===null?'A':this.route.snapshot.paramMap.get('price'),
      this.route.snapshot.paramMap.get('color')===null?'A':this.route.snapshot.paramMap.get('color')],
      { replaceUrl: true });
  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }

  public navigateProfile(){
    if(CurrentUser.email === null){
      this.navigateTo("login");
    }else{
      this.navigateTo("profile");
    }
  }

}
