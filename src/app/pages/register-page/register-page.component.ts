import { Component } from '@angular/core';
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  username: string = ''
  password: string = ''
  img : File | null = null
  data : any = {};

  constructor( private userService: UserService){

  }

  onFileSelected(event: any): void {
    const file = event.target.files[0]; // Select the first file
    if (file) {
      this.img = file;
    }
  }

  addUser(){
    this.data = {username :this.username, pass : this.password, img : this.img}

    this.userService.registerUser(this.data)
    
  }
}
