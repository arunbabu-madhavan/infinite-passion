import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ContactComponent } from './contact/contact.component';
import { Title } from '@angular/platform-browser';
import { ToolsModule } from './tools/tools.module';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    ToolsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
