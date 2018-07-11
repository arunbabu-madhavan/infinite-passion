import {Injectable} from '@angular/core'

@Injectable()
export class MenuService{
    showNavigationBar:boolean;
    showTopMenu:boolean;
    topMenuHeader:string;
    constructor(){
        this.showNavigationBar = true;
        this.showTopMenu = true;
    }
    
    homePageSetting(){
        this.showTopMenu = false;
    }

    defaultSetting(){
        this.showNavigationBar = true;
        this.showTopMenu = true;
    }
}