import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {
  private name:string;
  private greetingMessage:string;
  private _greeting:string;
  constructor() { }

  ngOnInit() {
    this.name = "Arun";
    this.greetingMessage = this.getGreetingMessage();
  }

  public get Greeting() : string {
    return this.greetingMessage.length > 0 ? this.greetingMessage + " " + this.name +"!" : null ;
  }

  getGreetingMessage():string{
    return "Welcome";
  }

}
