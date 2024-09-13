import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { UserInfo } from '../interface/user-info';
import * as fs from 'fs';
// import * as path from 'path';

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

  storeImg = async (fPath: string, imgData: Buffer) =>{
      fs.writeFile(fPath, imgData, (err)=>{
        if(err){
          console.log(`PAUSE... : ${err}`);  
          return
        }
          console.log('AYOO IT WORKED?!?!?!');  
          return
      })
  }

  uploadImg= async (path : string) =>{
    fs.readFile(path, (err,data)=>{
      if(err){
        return 'woopsie'
      }
        this.storeImg(path, data)
        return
    })
  }

}
