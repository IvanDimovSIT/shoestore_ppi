import { Component, Input, ViewChild } from '@angular/core';
import { ShoppingCart } from 'src/model/ShoppingCart';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout-price',
  templateUrl: './checkout-price.component.html',
  styleUrls: ['./checkout-price.component.css']
})
export class CheckoutPriceComponent {
  @Input() public checkoutFormComponent: CheckoutFormComponent = new CheckoutFormComponent();
  public price: number = 0;


  public ngOnInit(){
    ShoppingCart.getAll().forEach(i => {
      this.price += i.count * i.shoeItem.Price;
    });
  }

  public getTransportationCost():number{
    return (this.checkoutFormComponent.selectedCourier==='Econt'?
    this.checkoutFormComponent.ECONT_PRICE:
    this.checkoutFormComponent.SPEEDY_PRICE) + 
    (this.checkoutFormComponent.deliveryMethod==='office'?
    0:
    this.checkoutFormComponent.ADDRESS_DELIVERY_PRICE);
  }

}
