import { Component } from '@angular/core';
import { ShoeItem } from 'src/model/ShoeItem';
import { ShoeOrder } from 'src/model/ShoeOrder';
import { ShoppingCart } from 'src/model/ShoppingCart';

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

  public addQunatity(shoeOrder: ShoeOrder){
    ShoppingCart.addById(shoeOrder.shoeItem.Id, shoeOrder.shoeSize)
    this.displayedShoes = ShoppingCart.getAll();
  }

  public removeQuantity(shoeOrder: ShoeOrder){
    ShoppingCart.removeQuantity(shoeOrder);
    this.displayedShoes = ShoppingCart.getAll();
  }

}
