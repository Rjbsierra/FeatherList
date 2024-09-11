import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  // YOU STOPPED HERE!!!!
  // you were gonna make binded values from the oninit list
 @Input() title: string = '';

  isOpened : boolean = false;

  openList(isOpened :boolean){
    this.isOpened = isOpened;
  }

}
