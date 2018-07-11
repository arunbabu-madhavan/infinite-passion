import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from  '@angular/core';
@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  _open:boolean;
  @Output() onClose:EventEmitter<void> = new  EventEmitter<void>();
  @Input() width:number;
  @Input() height:number;

  
get open(): boolean {
    return this._open;
}

@Input('open')
set open(value: boolean) {
    this._open = value;
  window.scrollTo(0,0);
}
  constructor() { }

  ngOnInit() {
  }

  closeButtonClicked():void{
    this.onClose.emit();

}
}
