import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'blue-button',
  templateUrl: './blue-button.component.html',
  styleUrls: ['./blue-button.component.css']
})
export class BlueButtonComponent implements OnInit {
  @Input() ButtonText:string;
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