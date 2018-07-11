import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderHoverLedButtonComponent } from './border-hover-led-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BorderHoverLedButtonComponent]
  ,exports:[BorderHoverLedButtonComponent]
  ,schemas:[NO_ERRORS_SCHEMA]
})
export class BorderHoverLedButtonModule { }
