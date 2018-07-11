import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'loading-submit-button',
  templateUrl: './loading-submit-button.component.html',
  styleUrls: ['./loading-submit-button.component.css']
})
export class LoadingSubmitButtonComponent implements OnInit {
  @Input() ButtonText:string;
  @Input() IsLoading:boolean;
  @Input() Submitted:boolean;
  
  @Output() ButtonClicked: EventEmitter<void> = new  EventEmitter<void>();
  constructor() { 
    this.ButtonText ="";
  }

  OnClick():void{
    this.ButtonClicked.emit();
}
  ngOnInit() {
    
  }

}