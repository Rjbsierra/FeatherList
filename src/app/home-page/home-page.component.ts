import { Component, OnInit } from '@angular/core';
import { ListService } from '../api/list.service';
import { ListInfo } from '../interface/list-info';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  lists : Array<ListInfo> = [];

  constructor(private listService : ListService){
    
    

  }
  ngOnInit(): void {
    this.listService.getLists().subscribe({
      next: (data:ListInfo)=>{
        this.lists.push(data);
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }
}
