import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/model/CurrentUser';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
  selector: 'app-edit-profile-form',
  templateUrl: './edit-profile-form.component.html',
  styleUrls: ['./edit-profile-form.component.css']
})
export class EditProfileFormComponent {
  @Input() public notification: NotificationComponent = new NotificationComponent();
  public firstName:string = "";
  public lastName:string = "";
  public phone:string = "";
  public email:string = "";

  public constructor(private router:Router){
  }

  public ngOnInit(){
    if(CurrentUser.email === null)
      return;

    const user:User|undefined = UserData.get(CurrentUser.email);
    if(user === undefined)
      return; 

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.phone = user.phoneNumber;
    this.email = user.email;
  }

  private showNotification(message: string): void {
    console.log(message);
    this.notification.message = message;
    this.notification.showMessage();
  }

  public update(){
    if(CurrentUser.email === null)
      return;

    let user:User|undefined = UserData.get(CurrentUser.email);
    if(user === undefined)
      return;
      
    user.firstName = this.firstName;
    user.lastName = this.lastName;
    user.phoneNumber = this.phone;

    UserData.set(user);
    this.showNotification('Успешно редактиране!');
  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }

  public exit(){
    CurrentUser.email = null;
    this.navigateTo("");
  }
}
