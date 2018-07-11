import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkRoutingModule } from './tools-routing.module'
import { RouterModule } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { NotesModule } from './notes/notes.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    WorkRoutingModule,
    NotesModule,
    RouterModule,
    SharedModule
  ],
  declarations: [ToolsComponent],
})
export class ToolsModule { }
