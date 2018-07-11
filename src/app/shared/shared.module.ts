import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome'
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MenuService } from './menu.service';
import { BorderHoverButtonComponent } from './buttons/border-hover/border-hover-button.component';
import { PinkBubbleClickButtonComponent } from './buttons/pink-bubble-click/pink-bubble-click.component';
import { DiamondButtonComponent } from './buttons/diamond-button/diamond-button.component';
import { BlueButtonComponent } from './buttons/blue-button/blue-button.component';
import { RotatingBorderButtonComponent } from './buttons/rotating-border-button/rotating-border-button.component';
import { TransitionalButtonsComponent } from './buttons/transitional-buttons/transitional-buttons.component';
import { BorderHoverLedButtonModule } from './buttons/border-hover-led-button/border-hover-led-button.module';
import { PopupComponent } from './popup/popup.component';
import { LoadingSubmitButtonComponent } from './buttons/loading-submit-button/loading-submit-button.component';
import { UrlProviderService } from './url-provider.service'

@NgModule({
  imports: [
    CommonModule,AngularFontAwesomeModule,RouterModule,FormsModule, BorderHoverLedButtonModule,BorderHoverLedButtonModule
  ],
  declarations: [NavigationBarComponent, TopMenuComponent, 
      BorderHoverButtonComponent, PinkBubbleClickButtonComponent,
       DiamondButtonComponent, BlueButtonComponent, RotatingBorderButtonComponent,
        TransitionalButtonsComponent, PopupComponent,
         LoadingSubmitButtonComponent],
  providers:[MenuService, UrlProviderService],
  exports: [FormsModule,NavigationBarComponent,AngularFontAwesomeModule,TopMenuComponent
      ,BorderHoverButtonComponent,PinkBubbleClickButtonComponent,DiamondButtonComponent
      ,BlueButtonComponent, RotatingBorderButtonComponent,TransitionalButtonsComponent
      ,BorderHoverLedButtonModule,PopupComponent,LoadingSubmitButtonComponent]
})
export class SharedModule { }
