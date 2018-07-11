import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  expand:boolean=true;
  constructor(private router:Router) { 
    
  }
  close(){
    this.expand = false;
  }

  ngOnInit() {
    this.expand = false;
  }

}
