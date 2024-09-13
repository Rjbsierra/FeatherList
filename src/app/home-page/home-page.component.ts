import { Component, OnInit } from '@angular/core';
import { ListService } from '../api/list.service';
import { ListData, ListInfo } from '../interface/list-info';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  lists : ListInfo = new ListData();
  links : Array<any> = [];


  constructor(private listService : ListService){



  }
  ngOnInit(): void {
    this.links = [{
      name: ['Personlas', 'Groups'],
      links: ['home', 'scheduled', 'completed']
    }]
    this.listService.getLists().subscribe({
      next: (data:ListInfo)=>{
        this.lists = data;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
  }
}
