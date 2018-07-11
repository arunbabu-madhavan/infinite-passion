import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'transitional-buttons',
  templateUrl: './transitional-buttons.component.html',
  styleUrls: ['./transitional-buttons.component.css']
})
export class TransitionalButtonsComponent implements OnInit {
  @Input() ButtonText:string;
  @Input() type:Number;
  @Input() width:Number;
  
  @Output() ButtonClicked: EventEmitter<void> = new  EventEmitter<void>();
  constructor() { 
    this.ButtonText ="";
  }
  OnClick():void {
    this.ButtonClicked.emit();
}
  ngOnInit() {
    
  }

}