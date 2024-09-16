import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    username: String = '';
    password: String = '';
    user: any = {};
  constructor( private route : Router, private service : AuthService){

  }


  isForgot : boolean = false;

  forgotPass(isForgot : boolean){
    this.isForgot = isForgot;
  }

  onSubmitLogin(){
    this.service.loginUser(this.username,this.password)
  }

  onRegister(){
    this.route.navigate(['register']);
  }
}
