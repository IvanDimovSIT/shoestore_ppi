import { Component } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { TotalPriceService } from 'src/service/TotalPriceService';
import { PaypalConfigService, PaypalPaymentHandler } from 'src/service/PaypalConfigService';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/model/ShoppingCart';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent extends BasePageComponent implements PaypalPaymentHandler{
  public price: number;

  constructor(
  private totalPriceService: TotalPriceService,
  public paypalConfigService: PaypalConfigService,
  private router:Router
  ){
    super();
    this.price = totalPriceService.price;
    if(this.price <= 0)
      this.router.navigate([""]);
    paypalConfigService.initConfig(this.price, this);
  }

  public cancelPayment(){
    this.router.navigate(["checkout"]);
  }

  public onSuccess():void{
    console.log("Payment registered!");
    ShoppingCart.removeAll();
    this.router.navigate(["purchase-complete"]);
  }

  public onCancel(): void {
    console.error("\"public onCancel():void\" not implemented");
  }
  public onFail(): void {
    console.error("\"public onFail():void\" not implemented");
  }

}
