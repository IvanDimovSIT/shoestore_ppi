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

  public constructor(private router: Router, private route: ActivatedRoute) {
    const price = this.route.snapshot.paramMap.get('price');
    if(price !== null)
      this.price = price;
    
    const color = this.route.snapshot.paramMap.get('color');
    if(color !== null)
      this.color = color;
  }

  public ngOnInit() {
    console.log("From Path: Price:", this.price, " Color:", this.color);
  }

  public filterChange(price:string|null, color:string|null){
    this.router.navigate(
      ['/store',  this.route.snapshot.paramMap.get('g'),
      '1',
      price===null?this.route.snapshot.paramMap.get('price'):price,
      color===null?this.route.snapshot.paramMap.get('color'):color],
      { replaceUrl: true });
  }

  public toggle(event:any){
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

}
