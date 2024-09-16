import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ListInfo } from '../interface/list-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService  {

  constructor(private http:HttpClient, private localStorage: LocalStorageService) { 

    
  }

  getLists(): Observable<ListInfo>{
    return this.http.get<ListInfo>(`http://localhost:4000/api/v1/list/${this.localStorage.getItem('UID')}`)
  }



//   getListData() {
//     this.http.get<ListInfo>(`http://localhost:4000/api/list/${this.localStorage.getItem('UID')}`).subscribe({
//       next: (data)=>{
//           return data.list;
//       },
//       error:(err)=>{
//         console.log(err);
//       }
//     })
// }
}
