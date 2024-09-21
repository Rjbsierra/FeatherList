import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../api/user.service';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { UserInfo } from '../../interface/user-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerImage') headerImage !: ElementRef<HTMLImageElement>

  constructor(private userService: UserService){

  }

  ngOnInit(): void {

 

    this.userService.getUser().subscribe({
      next: (data: UserInfo) =>{
        this.headerImage.nativeElement.src = data.user.img;
      },error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
    
  }
}
