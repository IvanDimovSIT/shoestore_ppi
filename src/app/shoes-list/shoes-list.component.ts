import { Component } from '@angular/core';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoeItemData } from 'src/models/ShoeItemData';
import { ShoppingCart } from 'src/models/ShoppingCart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent {
  public displayedShoes:ReadonlyMap<number, ShoeItem>|null = null;
  private routerConnection:Router;

  constructor(private router: Router) { 
    this.routerConnection = router;
    this.loadAll();
  }

  public loadAll(){
    this.displayedShoes = ShoeItemData.getAll();
  }

  public addToCart(id:number){
    ShoppingCart.addById(id, "38");
  }

  buyShoe(id: number) {
    this.routerConnection.navigate(['/shoe-page', id]);
  }

}
