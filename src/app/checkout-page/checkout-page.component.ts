import { Component, ViewChild } from '@angular/core';
import { CheckoutFormComponent } from '../checkout-form/checkout-form.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {
  @ViewChild('checkoutForm') public checkoutForm!: CheckoutFormComponent;

  public ngAfterViewInit() {
    window.scrollTo(0, 0);
  }

}
