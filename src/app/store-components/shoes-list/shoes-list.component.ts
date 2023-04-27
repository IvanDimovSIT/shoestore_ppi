import { Component } from '@angular/core';
import { Colors, Genders, ShoeItem } from 'src/model/ShoeItem';
import { ShoeItemData } from 'src/model/ShoeItemData';
import { ShoppingCart } from 'src/model/ShoppingCart';
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

  public constructor(private routerConnection: Router, private activatedRoute: ActivatedRoute) { 
    let g:string|null = null;
    let p:string|null = null;
    let price:string|null = null;
    let color:string|null = null;
    let brand:string|null = null;

    this.activatedRoute.paramMap.subscribe(params => {
      g = params.get('g');
      p = params.get('p');
      price = params.get('price');
      color = params.get('color');
      brand = params.get('brand');

      if(price === null){
        price = 'A';
      }

      if(color === null){
        color = 'A';
      }

      if(brand === null){
        brand = 'A';
      }

      if(g === null || g === 'a'){
        this.loadAll();
        return;
      }

      //Filter
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

      switch(price){
        case '0':
        this.filterByPrice(0, 50);
        break;
        case '50':
        this.filterByPrice(50, 100);
        break;
        case '100':
        this.filterByPrice(100, 200);
        break;
        case '200':
        this.filterByPrice(200, 9999999);
        break;
      }

      this.filterByColor(color);
      this.filterByBrand(brand);

      this.findItemsOnPage(p);
    });
  }

  
  private findItemsOnPage(pageString: string|null){
    this.maxPage = Math.floor( 1+(this.displayedShoes!.size/ShoesListComponent.ITEMS_PER_PAGE));

    if(pageString !== null){
      const page:number = Number.parseInt(pageString);
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
  }

  private filterByColor(colorString: string){
    if(colorString === 'A')
      return;
    const color:Colors = Colors[colorString as keyof typeof Colors];
    if(color === undefined)
      return;

    const displayedShoesArray:[number,ShoeItem][] = Array.from(this.displayedShoes!.entries());
    this.displayedShoes = new Map(displayedShoesArray.filter(shoe => shoe[1].Color == color));
    
  }

  private filterByPrice(startPrice:number, endPrice: number){
    const displayedShoesArray:[number,ShoeItem][] = Array.from(this.displayedShoes!.entries());
    this.displayedShoes = new Map(displayedShoesArray.filter(shoe => shoe[1].Price >= startPrice && shoe[1].Price <= endPrice));
  }

  private filterByBrand(brand:string){
    if(brand === 'A')
      return;
    const displayedShoesArray:[number,ShoeItem][] = Array.from(this.displayedShoes!.entries());
    this.displayedShoes = new Map(displayedShoesArray.filter(shoe => shoe[1].Brand == brand));
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
    this.routerConnection.navigate(
      ['/store',
      this.gender,
      pageNumber,
      this.activatedRoute.snapshot.paramMap.get('brand'),
      this.activatedRoute.snapshot.paramMap.get('price'),
      this.activatedRoute.snapshot.paramMap.get('color') ],
      { replaceUrl: true });
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
