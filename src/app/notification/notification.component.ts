import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  @Input() message: string = "";
  public showNotification: boolean = false;
  private activeNotification:number|null = null;

  public showMessage(): void {
    if(this.showNotification == true && this.activeNotification !== null){
      clearTimeout(this.activeNotification);
      this.showNotification = false;

      this.activeNotification = window.setTimeout(() => {
        this.showNotification = true;
      }, 50);
    }else{
      this.showNotification = true;
    }
    this.activeNotification = window.setTimeout(() => {
      this.showNotification = false;
    }, 3000);
  }
}
