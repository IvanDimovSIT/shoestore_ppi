import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalPriceService {
  private _price: number = -1;

  public set price(price: number) {
    this._price = price;
  }

  public get price():number {
    return this._price;
  }
}