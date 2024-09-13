import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  username: string = ''
  password: string = ''
  img : string = ''

  constructor( private userService: UserService){

  }

  addUser(){
    console.log(this.img)
    
  }
}
