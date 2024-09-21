import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../../api/list.service';
import { ListData, ListInfo } from '../../interface/list-info';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{

  lists : ListInfo = new ListData();
  links : Array<any> = [];
  @ViewChild('justImage') justImage !: ElementRef<HTMLImageElement>


  constructor(private listService : ListService,private http: HttpClient){



  }
  ngOnInit(): void {

    //user

  


    // fOR lISTS
    this.links = [{
      name: ['Personlas', 'Groups'],
      links: ['home', 'scheduled', 'completed']
    }]
    this.listService.getLists().subscribe({
      next: (data:ListInfo)=>{
        console.log(data);
        this.lists = data;
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
    })
   }
}
