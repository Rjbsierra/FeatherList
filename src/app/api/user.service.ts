import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { UserInfo } from '../interface/user-info';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient, private localStorage: LocalStorageService, private route: Router) { }

  reqUser(username: String, password: String){
    
    this.http.get<UserInfo>(`http://localhost:4000/api/user/username/${username}/password/${password}`).subscribe({
      next: (data) =>{
        localStorage.setItem('UID' ,data.user._id)
        localStorage.setItem('Username', data.user.username)
        localStorage.setItem('Role', data.user.role)
        this.route.navigateByUrl('/home')
      },
      error:(error:HttpErrorResponse) =>{
        console.log(error);
      }
     })
  }
}
