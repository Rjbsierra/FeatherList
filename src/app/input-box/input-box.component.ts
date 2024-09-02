import { Component, ElementRef, Input, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})

export class InputBoxComponent implements OnInit{
  @ViewChild('inputBox') inputBox?: ElementRef<HTMLInputElement>;
  @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('inputName') inputName?: ElementRef<HTMLLabelElement>;


  @Input() widthPx : String = '100px'
  @Input() value: any;
  @Input({required: true}) name: String = '';
  @Input() placeholder: String = 'placeholder';
  @Input() type: String = 'text';

  focusInput = () =>{
    this.inputBox?.nativeElement.focus();
    console.log("focusing")
  }
  onFocus(isFocused: boolean) {
    if (isFocused) {
      this.inputContainer.nativeElement.classList.add('focused');

    } else {
      this.inputContainer.nativeElement.classList.remove('focused');

    }
  }
  ngOnInit(): void {
      
  }

}

