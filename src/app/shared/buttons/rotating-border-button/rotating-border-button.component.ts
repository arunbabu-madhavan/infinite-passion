import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'rotating-border-button',
  templateUrl: './rotating-border-button.component.html',
  styleUrls: ['./rotating-border-button.component.css']
})
export class RotatingBorderButtonComponent implements OnInit {
  @Input() ButtonText:string;
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