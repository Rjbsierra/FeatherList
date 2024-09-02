import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  baseUrl :String =  'http://localhost:4000/'

  book: any = {}

  constructor(
    private http:HttpClient
  ){

  }

  getAllProd(limit: number = 5) {
    const prodUrl : string = `${this.baseUrl}book`;
    return this.http.get<any>(prodUrl);
  }

  theBook(){
    this.getAllProd().subscribe({
      next: (data) =>{
        console.log(data);
        this.book =  data.title
      },
      error:(error:HttpErrorResponse) =>{
        console.log('ewwor');
        console.log(error);
      }
     })
  }

}
