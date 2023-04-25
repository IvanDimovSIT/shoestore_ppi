import { Component } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-complete-page',
  templateUrl: './purchase-complete-page.component.html',
  styleUrls: ['./purchase-complete-page.component.css']
})
export class PurchaseCompletePageComponent extends BasePageComponent{
  public constructor(private router:Router){
    super();
  }

  public navigateToStore(){
    this.router.navigate([""]);
  }
}
