import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrl: './sidebar-list.component.css'
})
export class SidebarListComponent {
  @ViewChild('sectionBody') sectionBody !: ElementRef<HTMLDivElement>;

  @Input() name: String = '';
  @Input() links: any = [];

  isopened : boolean = false;

  isClicked(isopened : boolean){
    if(isopened){
      this.sectionBody.nativeElement.classList.add('opened');
      this.isopened = false
    }else{
      this.sectionBody.nativeElement.classList.remove('opened');
      this.isopened = true
    }
  }
}
