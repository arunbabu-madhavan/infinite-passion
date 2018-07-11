import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'pink-bubble-click-button',
  templateUrl: './pink-bubble-click.component.html',
  styleUrls: ['./pink-bubble-click.component.css']
})
export class PinkBubbleClickButtonComponent implements OnInit {
  @Input() ButtonText:string;
  @Output() ButtonClicked: EventEmitter<void> = new  EventEmitter<void>();
  animate:boolean = false;
  constructor() { 
    this.ButtonText ="";
  }
  OnClick():void{
    this.animate = true;
    setTimeout(()=>{this.animate=false},700);
    this.ButtonClicked.emit();
}
  ngOnInit() {
    
  }
}