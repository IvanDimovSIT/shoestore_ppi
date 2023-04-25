import { Component, ViewChild } from '@angular/core';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent extends BasePageComponent{
  @ViewChild('checkoutForm') public checkoutForm!: CheckoutFormComponent;

}
