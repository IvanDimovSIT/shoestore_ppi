import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {
  public readonly ECONT_PRICE: number = 5;
  public readonly SPEEDY_PRICE: number = 7;
  public readonly ADDRESS_DELIVERY_PRICE: number = 5;

  public selectedCourier: string = 'Econt';
  public paymentMethod: string = 'Card';
  public deliveryMethod: string = 'address';

  public selectCourier(selected: string){
    this.selectedCourier = selected;    
  }

  public selectDeliveryMethod(method: string){
    this.deliveryMethod = method;
  }

  public selectPaymentMethod(selected: string){
    this.paymentMethod = selected;
  }

}
