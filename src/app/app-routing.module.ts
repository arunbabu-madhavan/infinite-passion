import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'home',component:HomeComponent, data:{title:'Home'}},
      {path:'contact',component:ContactComponent, data:{title:'Contact Information'}},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule {


 }
