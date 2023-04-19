import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent {
  ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
