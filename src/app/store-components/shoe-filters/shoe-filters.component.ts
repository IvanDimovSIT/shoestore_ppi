import { trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shoe-filters',
  templateUrl: './shoe-filters.component.html',
  styleUrls: ['./shoe-filters.component.css']
})
export class ShoeFiltersComponent {
  public showFilters: boolean = false; 
  public price: string = "A";
  public color: string = "A";
  public brand: string = "A";

  public constructor(private router: Router, private route: ActivatedRoute) {
    this.readPathVariables();
  }

  public ngOnInit() {
    console.log("From Path: Price:", this.price, " Color:", this.color, " Brand:", this.brand);
  }

  public filterChange(price:string|null, color:string|null, brand:string|null){
    this.router.navigate(
      ["/store",  this.route.snapshot.paramMap.get("g"),
      "1",
      brand===null?this.route.snapshot.paramMap.get("brand"):brand,
      price===null?this.route.snapshot.paramMap.get("price"):price,
      color===null?this.route.snapshot.paramMap.get("color"):color],
      { replaceUrl: true });
  }

  public toggle(event:any){
    this.readPathVariables();
    console.log("Shoe filters:",this);
    const element = event.target;
    if (element.classList.contains('InactiveFilter')) {
      element.classList.remove('InactiveFilter');
      element.classList.add('ActiveFilter');
    } else {
      element.classList.add('InactiveFilter');
      element.classList.remove('ActiveFilter');
    }

    this.showFilters = !this.showFilters;
  }

  private readPathVariables(){
    const price:string|null = this.route.snapshot.paramMap.get("price");
    if(price !== null){
      this.price = price;
    }else{
      this.price = "A";
    }

    const color:string|null = this.route.snapshot.paramMap.get("color");
    if(color !== null){
      this.color = color;
    }else{
      this.color = "A";
    }
  
    const brand:string|null = this.route.snapshot.paramMap.get("brand");
    if(brand !== null){
      this.brand = brand;
    }else{
      this.brand = "A";
    }
  }

}
