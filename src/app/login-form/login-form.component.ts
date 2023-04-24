import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/model/CurrentUser';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @Input() public notification: NotificationComponent = new NotificationComponent();
  public constructor(private router:Router){
  }

  private showNotification(message: string): void {
    console.log(message);
    this.notification.message = message;
    this.notification.showMessage();
  }

  public logIn(){
    const user:User|undefined = UserData.get((document.getElementById("email") as HTMLInputElement).value);
    if(user === undefined){
      this.showNotification("Неправилен е-мейл или парола");
      return;
    }

    if(user.password !== (document.getElementById("password") as HTMLInputElement).value){
      this.showNotification("Неправилен е-мейл или парола");
      return;
    }

    CurrentUser.email = user.email;

    this.router.navigate([""]);
  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }
}
