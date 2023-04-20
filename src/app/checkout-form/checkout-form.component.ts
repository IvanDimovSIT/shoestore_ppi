import { Component } from '@angular/core';
import { CheckoutPriceComponent } from '../checkout-price/checkout-price.component';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {
  public selectedCourier: string = 'Econt';
  public paymentMethod: string = 'Card';

  public selectCourier(selected: string){
    this.selectedCourier = selected;    
  }

  public selectPaymentMethod(selected: string){
    this.paymentMethod = selected;
  }

}
