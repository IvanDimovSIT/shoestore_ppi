import { Component } from '@angular/core';
import { Genders, ShoeItem } from 'src/models/ShoeItem';
import { ShoeItemData } from 'src/models/ShoeItemData';
import { ShoppingCart } from 'src/models/ShoppingCart';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.css']
})
export class ShoesListComponent {
  public displayedShoes:ReadonlyMap<number, ShoeItem>|null = null;

  constructor(private routerConnection: Router, private activatedRoute: ActivatedRoute) { 

    let g:string|null = null;
    this.activatedRoute.paramMap.subscribe(params => {
      g = params.get('g');

      if(g === null || g === 'a'){
        this.loadAll();
        return;
      }

      switch(g){
        case 'M':
        this.loadMen();
        break;
        case 'F':
        this.loadWomen();
        break;
        case 'K':
        this.loadKids();
        break;
        default:
        this.loadAll();
        break;
      }

    });
  }

  public loadAll(){
    this.displayedShoes = ShoeItemData.getAll();
  }

  public loadMen(){
    this.displayedShoes = ShoeItemData.getByGender(Genders.M);
  }

  public loadWomen(){
    this.displayedShoes = ShoeItemData.getByGender(Genders.F);
  }

  public loadKids(){
    this.displayedShoes = ShoeItemData.getByGender(Genders.K);
  }

  public addToCart(id:number){
    ShoppingCart.addById(id, "38");
  }

  buyShoe(id: number) {
    this.routerConnection.navigate(['/shoe-page', id]);
  }

}
