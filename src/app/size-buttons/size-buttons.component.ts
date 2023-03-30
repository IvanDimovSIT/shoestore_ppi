import { Component, Input } from '@angular/core';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoppingCart } from 'src/models/ShoppingCart';
import { ShoePageComponent } from '../shoe-page/shoe-page.component';

@Component({
  selector: 'app-size-buttons',
  templateUrl: './size-buttons.component.html',
  styleUrls: ['./size-buttons.component.css']
})
export class SizeButtonsComponent {
  @Input() shoe: ShoeItem|null = null;
  selectedSize: string|null = null;

  public getSizes():string[]{
    return this.shoe!.getSizes();
  }

  public onButtonClick(size:string){
    this.selectedSize = size;
    console.log("Clicked:",size, this);
  }

  public addToCart(){
    if(this.selectedSize == null)
      return;

    ShoppingCart.addById(this.shoe!.getId(), this.selectedSize);
  }
}
