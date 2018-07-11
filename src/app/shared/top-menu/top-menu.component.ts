import { Component, OnInit } from '@angular/core';
import { MenuService } from './../menu.service'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  isHome:boolean;
  constructor(public menu:MenuService,public title:Title) { 
    
  }
  get menuHeader():string{
    return this.menu.topMenuHeader ?this.menu.topMenuHeader : this.title.getTitle();
}
  ngOnInit() {
    
  }

}
