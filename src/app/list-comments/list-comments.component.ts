import { Component, Input, OnInit } from '@angular/core';
import { ListData, ListInfo } from '../interface/list-info';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.css'
})
export class ListCommentsComponent implements OnInit {



  @Input() data : any;

  commentData : ListInfo =  new ListData();

  ngOnInit(): void {
    if(this.data){
      this.commentData.list[0].comments = this.data;
      console.log(this.commentData.list[0].comments);
    }

  }

}
