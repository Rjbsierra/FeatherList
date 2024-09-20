import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../interface/user-info';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router, private localstorage : LocalStorageService) { }
  loginUser(username: String, password: String){
    this.http.post<any>(`http://localhost:4000/api/v1/user/login`, {username : username, password : password}).subscribe({
      next: (data) =>{
        console.log(data)
        
        //this takes the jwt token
        this.localstorage.setItem('token', data.token)
        this.route.navigateByUrl('/home')

      },
      error:(error:HttpErrorResponse) =>{
        console.log(error);
      }
     })
  }

}
