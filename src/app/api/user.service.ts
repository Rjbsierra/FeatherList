import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { UserInfo } from '../interface/user-info';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient, private localStorage: LocalStorageService, private route: Router) { 
   
  }
    

    registerUser = async (user : any) =>{
      const formData = new FormData();

      formData.append('img', user.img, user.img.name);
      formData.append('username', user.username);
      formData.append('password', user.pass);
      this.http.post(`http://localhost:4000/api/v1/user`, formData).subscribe(data=>{
        console.log(data);
      })
    }
    

 }
