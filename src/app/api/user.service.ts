import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { UserInfo } from '../interface/user-info';
// import * as fs from 'fs';
// import * as path from 'path';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient, private localStorage: LocalStorageService, private route: Router) { }

 
    


  // storeImg = async (fPath: string, imgData: Buffer) =>{
  //     fs.writeFile(fPath, imgData, (err)=>{
  //       if(err){
  //         console.log(`PAUSE... : ${err}`);  
  //         return
  //       }
  //         console.log('AYOO IT WORKED?!?!?!');  
  //         return
  //     })
  // }

//   uploadImg= async (path : string) =>{
//     fs.readFile(path, (err,data)=>{
//       if(err){
//         return 'woopsie'
//       }
//         this.storeImg(path, data)
//         return
//     })
//   }

 }
