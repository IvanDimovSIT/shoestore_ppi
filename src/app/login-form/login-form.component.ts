import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentUser } from 'src/model/CurrentUser';
import { User } from 'src/model/User';
import { UserData } from 'src/model/UserData';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  public constructor(private router:Router){
  }

  public logIn(){
    const user:User|undefined = UserData.get((document.getElementById("email") as HTMLInputElement).value);
    if(user === undefined){
      console.log("Email not found");
      return;
    }

    if(user.password !== (document.getElementById("password") as HTMLInputElement).value){
      console.log("Wrong password");
      return;
    }

    CurrentUser.email = user.email;

    this.router.navigate([""]);
  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }
}
