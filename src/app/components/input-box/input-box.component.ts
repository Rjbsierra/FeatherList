import { Component, ElementRef, EventEmitter, Input, OnInit, Output, output, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})

export class InputBoxComponent implements OnInit{

  inputValue: String = '';

  @ViewChild('inputBox') inputBox?: ElementRef<HTMLInputElement>;
  @ViewChild('inputContainer') inputContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('inputName') inputName?: ElementRef<HTMLLabelElement>;


  @Input() widthPx : String = '100px'
  @Input() value: any;
  @Input({required: true}) name: String = '';
  @Input() placeholder: String = 'placeholder';
  @Input() type: String = 'text';

  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();



  focusInput = () =>{
    this.inputBox?.nativeElement.focus();
  }
  onFocus(isFocused: boolean) {
    if (isFocused) {
      this.inputContainer.nativeElement.classList.add('focused');

    } else {
      this.inputContainer.nativeElement.classList.remove('focused');

    }
  }

  onChange(){
    this.valueChanged.emit(this.inputValue);
  }
  ngOnInit(): void {
      
  }

}

