import { Component, Input, OnInit } from '@angular/core';
import { ListData, ListInfo } from '../interface/list-info';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  @Input() data : any;
  @Input() index: number = 0;


  commentData : any;
  listData : ListInfo = new ListData();
  title: string = '';
  time: string = 'WCT'

  constructor() { 

  }
  ngOnInit(): void {
      this.listData.list[0] = this.data
      this.title = this.listData.list[0].title;
      this.commentData = this.listData.list[0].comments
  }

  



  isOpened : boolean = false;

  openList(isOpened :boolean){
    this.isOpened = isOpened;
  }

}
