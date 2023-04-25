import { Component } from '@angular/core';
import { BasePageComponent } from '../base-page/base-page.component';
import { TotalPriceService } from 'src/service/TotalPriceService';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent extends BasePageComponent {
  public price: number;

  constructor(private totalPriceService: TotalPriceService){
    super();
    this.price = totalPriceService.price;
  }

}
