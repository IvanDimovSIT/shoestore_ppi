import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  public navigateTo(path: string){
    this.document.location.href = 'https://'+path;
  }

  public ngAfterViewInit() {
    window.scrollTo(0, 0);
  }
}
