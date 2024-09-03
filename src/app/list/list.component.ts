import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  isOpened : boolean = false;

  openList(isOpened :boolean){
    this.isOpened = isOpened;
  }

}
