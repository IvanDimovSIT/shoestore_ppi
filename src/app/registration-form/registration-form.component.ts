import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @Input() public notification: NotificationComponent = new NotificationComponent();
  
  public registrationData = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  public constructor(private router:Router){
  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }

  public ngOnInit():void{
    console.log("UserData:",UserData);
  }

  private showNotification(message: string): void {
    console.log(message);
    this.notification.message = message;
    this.notification.showMessage();
  }

  private validate():boolean{
    return (
      this.registrationData.firstName !== "" &&
      this.registrationData.lastName !== "" &&
      this.registrationData.phone !== "" &&
      this.registrationData.email !== "" &&
      this.registrationData.password !== "" &&
      this.registrationData.passwordConfirm !== "");
  }

  public clearFields():void{
    this.registrationData.firstName = "";
    this.registrationData.lastName = "";
    this.registrationData.phone = "";
    this.registrationData.email = "";
    this.registrationData.password = "";
    this.registrationData.passwordConfirm = "";
  }

  public register():void{
    console.log("Enterd data:", this.registrationData);
    console.log("Registerd users:", UserData);
    if(!this.validate()){
      this.showNotification("Не са попълнени всички полета");
      return;
    }

    if(this.registrationData.password !== this.registrationData.passwordConfirm){
      this.showNotification("Паролите не съответстават");
      return;
    }
    if(UserData.add(
      new User(
        this.registrationData.email,
        this.registrationData.password,
        this.registrationData.firstName,
        this.registrationData.lastName,
        this.registrationData.phone))){
      this.showNotification("Успешна регистрация!");
      this.clearFields();
    }else{
      this.showNotification("Е-мейлът вече се използва");
    }
  }

}
