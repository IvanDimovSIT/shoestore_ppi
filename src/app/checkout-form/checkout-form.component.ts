import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/model/CurrentUser';
import { ShoppingCart } from 'src/model/ShoppingCart';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';
import { TotalPriceService } from 'src/service/TotalPriceService';

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

  public constructor(private router:Router, private totalPriceService: TotalPriceService){
  }


  public ngOnInit(){
    if(CurrentUser.email === null)
      return;
    
    const firstName:HTMLInputElement = document.getElementById('firstName') as HTMLInputElement;
    const lastName:HTMLInputElement = document.getElementById('lastName') as HTMLInputElement;
    const phone:HTMLInputElement = document.getElementById('phone') as HTMLInputElement;
    const email:HTMLInputElement = document.getElementById('email') as HTMLInputElement;

    const user:User|undefined = UserData.get(CurrentUser.email);
    if(user === undefined)
      return; 

    firstName.value = user.firstName;
    lastName.value = user.lastName;
    phone.value = user.phoneNumber;
    email.value = user.email;
  }

  public selectCourier(selected: string){
    this.selectedCourier = selected;    
  }

  public selectDeliveryMethod(method: string){
    this.deliveryMethod = method;
  }

  public selectPaymentMethod(selected: string){
    this.paymentMethod = selected;
  }

  public finishCheckout(){
    if(this.paymentMethod === "Cash"){
      ShoppingCart.removeAll();
      this.router.navigate(["purchase-complete"]);
    }else if(this.paymentMethod === "Card"){
      let price = 0;
      ShoppingCart.getAll().forEach(i => {
        price += i.count * i.shoeItem.Price;
      });
      this.totalPriceService.price = this.getTransportationCost() + price; 
      this.router.navigate(["payment"]);
    }else{
      console.error("Invalid payment method");
    }
  }

  public getTransportationCost():number{
    return (this.selectedCourier==='Econt'?
    this.ECONT_PRICE:
    this.SPEEDY_PRICE) + 
    (this.deliveryMethod==='office'?
    0:
    this.ADDRESS_DELIVERY_PRICE);
  }

}
