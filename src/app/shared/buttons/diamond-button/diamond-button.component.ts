import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'diamond-button',
  templateUrl: './diamond-button.component.html',
  styleUrls: ['./diamond-button.component.css']
})
export class DiamondButtonComponent implements OnInit {
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