import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'border-hover-button',
  templateUrl: './border-hover-button.component.html',
  styleUrls: ['./border-hover-button.component.css']
})
export class BorderHoverButtonComponent implements OnInit {
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
