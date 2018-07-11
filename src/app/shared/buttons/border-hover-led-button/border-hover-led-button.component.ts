import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'border-hover-led-button',
  templateUrl: './border-hover-led-button.component.html',
  styleUrls: ['./border-hover-led-button.component.css']
})
export class BorderHoverLedButtonComponent implements OnInit {
  @Input() ButtonText:string;
  @Output() ButtonClicked: EventEmitter<void> = new  EventEmitter<void>();
  @Input() width:number;
  @Input() routerLink:any[];
  dashOffset:number;
  constructor() { 
    this.width = 150;
  }
  OnClick():void {
    this.ButtonClicked.emit();
    
  }
  ngOnInit() {
    this.dashOffset = 220 ;
  }

}
