import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoeItem } from 'src/models/ShoeItem';
import { ShoeItemData } from 'src/models/ShoeItemData';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shoe-page',
  templateUrl: './shoe-page.component.html',
  styleUrls: ['./shoe-page.component.css']
})
export class ShoePageComponent {
  private activatedRoute:ActivatedRoute;
  private httpClient:HttpClient;
  public shoe:ShoeItem|null;

  constructor(private http: HttpClient,private route: ActivatedRoute) { 
    this.activatedRoute = route;
    this.httpClient = http;
    this.shoe = null;

    this.route.paramMap.subscribe(params => {
      this.shoe = ShoeItemData.getById( parseInt(params.get('id')!) );
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const shoeId = params['id'];
      this.httpClient.get(`/api/shoes/${shoeId}`).subscribe(shoe => {
        this.shoe = ShoeItemData.getById(shoeId);
      });
    });
  }
}
