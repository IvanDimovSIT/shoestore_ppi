import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    window.scrollTo(0, 0);
  }
}
