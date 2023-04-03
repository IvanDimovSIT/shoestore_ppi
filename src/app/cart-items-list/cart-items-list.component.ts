import { Component } from '@angular/core';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoeOrder } from 'src/models/ShoeOrder';
import { ShoppingCart } from 'src/models/ShoppingCart';

@Component({
  selector: 'app-cart-items-list',
  templateUrl: './cart-items-list.component.html',
  styleUrls: ['./cart-items-list.component.css']
})
export class CartItemsListComponent {
  public displayedShoes:ShoeOrder[];
  
  public constructor(){
    this.displayedShoes = ShoppingCart.getAll();
    console.log("Loading:", this.displayedShoes);
    for(let i of this.displayedShoes){
      console.log("Displaying:", i, i.shoeItem, i.shoeItem.Name);
    }
  }

  public removeShoe(shoeOrder: ShoeOrder){
    console.log("removing:",shoeOrder);
    ShoppingCart.remove(shoeOrder);
    this.displayedShoes = ShoppingCart.getAll();
  }

}
