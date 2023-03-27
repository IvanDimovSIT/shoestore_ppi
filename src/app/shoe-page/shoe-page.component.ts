import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoeItemData } from 'src/models/ShoeItemData';

@Component({
  selector: 'app-shoe-page',
  templateUrl: './shoe-page.component.html',
  styleUrls: ['./shoe-page.component.css']
})
export class ShoePageComponent {
  public shoe:ShoeItem|null;

  constructor(private route: ActivatedRoute) { 
    this.shoe = null;

    this.route.paramMap.subscribe(params => {
      this.shoe = ShoeItemData.getById( parseInt(params.get('id')!) );
    });
  }

}
