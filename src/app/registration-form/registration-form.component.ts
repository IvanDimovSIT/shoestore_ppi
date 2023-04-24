import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
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
      console.log("Not all fields entered!");
      return;
    }

    if(this.registrationData.password !== this.registrationData.passwordConfirm){
      console.log("password fields don't match!");
      return;
    }
    if(UserData.add(
      new User(
        this.registrationData.email,
        this.registrationData.password,
        this.registrationData.firstName,
        this.registrationData.lastName,
        this.registrationData.phone))){
      console.log("User registered successfully");
      this.clearFields();
    }else{
      console.log("Email already registered!");
    }
  }

}
