import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { BasePageComponent } from '../../base-page/base-page.component';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent extends BasePageComponent{
  constructor(@Inject(DOCUMENT) private document: Document) {
    super();
  }

  public navigateTo(path: string){
    this.document.location.href = 'https://'+path;
  }

}
