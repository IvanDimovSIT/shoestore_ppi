import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {
  public selectedCourier: string = 'Econt';

  public selectCourier(selected: string){
    this.selectedCourier = selected;    
  }
}
