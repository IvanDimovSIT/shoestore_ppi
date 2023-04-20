import { Component, Input, ViewChild } from '@angular/core';
import { ShoppingCart } from 'src/model/ShoppingCart';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout-price',
  templateUrl: './checkout-price.component.html',
  styleUrls: ['./checkout-price.component.css']
})
export class CheckoutPriceComponent {
  public static readonly ECONT_PRICE: number = 5;
  public static readonly SPEEDY_PRICE: number = 10;

  @Input() public checkoutFormComponent: CheckoutFormComponent = new CheckoutFormComponent();
  public price: number = 0;


  public ngOnInit(){
    ShoppingCart.getAll().forEach(i => {
      this.price += i.count * i.shoeItem.Price;
    });
  }

  public getTransportationCost():number{
    return this.checkoutFormComponent.selectedCourier==='Econt'?
      CheckoutPriceComponent.ECONT_PRICE:
      CheckoutPriceComponent.SPEEDY_PRICE;
  }

}
