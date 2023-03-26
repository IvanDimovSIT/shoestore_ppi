import { Component } from '@angular/core';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoeItemData } from 'src/models/ShoeItemData';
import { ShoppingCart } from 'src/models/ShoppingCart';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent {
  public displayedShoes:ReadonlyMap<number, ShoeItem>|null = null;

  constructor(){
    this.loadAll();
  }

  public loadAll(){
    this.displayedShoes = ShoeItemData.getAll();
  }

  public addToCart(id:number){
    //temporary
    ShoppingCart.addById(id, "38");
  }

}
