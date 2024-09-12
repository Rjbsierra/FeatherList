import { Component, Input, OnInit } from '@angular/core';
import { ListData, ListInfo } from '../interface/list-info';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent implements OnInit{

  @Input() data : any;
  @Input() index : number = 0;
  listData : ListInfo = new ListData();
  title : string = ''
  time : string = ''
  content : string = ''
  status : string = ''
  isTimed : boolean = false
  isAssign : boolean = false
 

  ngOnInit(): void {
    this.listData.list[0].list_items[0] = this.data 
    if(this.data){
      this.title = this.listData.list[0].list_items[0].title
      this.content = this.listData.list[0].list_items[0].content

    }
  }

}
