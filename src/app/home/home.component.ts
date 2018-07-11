import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MenuService } from './../shared/menu.service'
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private menuService:MenuService) {
      
   }

  ngOnInit() {
    document.body.style.backgroundColor="#000";
    this.menuService.homePageSetting();
  }
  ngOnDestroy(){
    document.body.style.backgroundColor="#fff";
    this.menuService.defaultSetting();
  }
}
