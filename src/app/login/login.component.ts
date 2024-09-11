import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    username: String = '';
    password: String = '';
    user: any = {};
  constructor( private route : Router, private service : UserService){

  }


  isForgot : boolean = false;

  forgotPass(isForgot : boolean){
    this.isForgot = isForgot;
  }

  onSubmitLogin(){
    this.service.reqUser(this.username,this.password)
  }

}
