import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ParticleAnimationComponent } from './particle/particle-animation.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ParticleAnimationComponent, GreetingComponent]
})
export class HomeModule { }
