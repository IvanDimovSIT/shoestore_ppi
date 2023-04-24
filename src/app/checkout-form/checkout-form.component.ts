import { Component } from '@angular/core';
import { CurrentUser } from 'src/model/CurrentUser';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';

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

}
