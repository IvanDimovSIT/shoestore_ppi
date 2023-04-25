import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-bar',
  templateUrl: './footer-bar.component.html',
  styleUrls: ['./footer-bar.component.css']
})
export class FooterBarComponent {
  public constructor(private router:Router){

  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }

}
