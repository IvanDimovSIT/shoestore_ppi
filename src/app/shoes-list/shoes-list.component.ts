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
  private static readonly ITEMS_PER_PAGE: number = 12;
  public displayedShoes:ReadonlyMap<number, ShoeItem>|null = null;
  public pageNumber:number = 1;
  public gender:string = 'A';
  public maxPage:number=1;

  constructor(private routerConnection: Router, private activatedRoute: ActivatedRoute) { 
    let g:string|null = null;
    let p:string|null = null;

    this.activatedRoute.paramMap.subscribe(params => {
      g = params.get('g');
      p = params.get('p');

      if(g === null || g === 'a'){
        this.loadAll();
        return;
      }

      this.gender = g;
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
      this.maxPage = Math.floor( 1+(this.displayedShoes!.size/ShoesListComponent.ITEMS_PER_PAGE));

      if(p !== null){
        const page:number = Number.parseInt(p);
        if(Number.isNaN(page))return;
        if(page<1)return;
        
        if(page>this.maxPage){
          this.pageNumber = this.maxPage;
        }else{
          this.pageNumber = page;
        }
      }

      const displayedShoesArray:[number,ShoeItem][] = Array.from(this.displayedShoes!.entries());
      const startIndex:number = Math.min((this.pageNumber-1)*ShoesListComponent.ITEMS_PER_PAGE, displayedShoesArray.length - 1);
      const endIndex:number = Math.min(this.pageNumber*ShoesListComponent.ITEMS_PER_PAGE - 1, displayedShoesArray.length - 1);
      this.displayedShoes = new Map(displayedShoesArray.slice(startIndex, endIndex + 1));
      
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

  public buyShoe(id: number) {
    this.routerConnection.navigate(['/shoe-page', id]);
  }

  public navigateToPage(pageNumber: number){
    if(pageNumber<1)
      pageNumber = 1;
    if(pageNumber>this.maxPage)
      pageNumber = this.maxPage;
    this.routerConnection.navigate(['/store', this.gender, pageNumber], { replaceUrl: true });
    if(pageNumber != this.pageNumber){
      window.scrollTo(0, 0);//go to the top
    }
  }

  public convertToPositiveInt(value: EventTarget|null): number {
    if(value === null)
      return 0;

    const text:string = (value as HTMLInputElement).value;

    const intValue:number = parseInt(text, 10);
  
    if (isNaN(intValue) || intValue < 1) {
      return 0;
    }
  
    return intValue;
  }

}
