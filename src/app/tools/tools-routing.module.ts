import { NgModule } from '@angular/core';
import { NotesComponent } from './notes/notes.component';
import { QuestionnaireComponent } from './notes/questionnaire/questionnaire.component'
import { RouterModule } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { QuestionListComponent } from './notes/questionnaire/question-list/question-list.component';


let workRouteConfig = [
  {
    path:'tools/notes',
    component:NotesComponent,
    data:{title:"Notes"}
  },
  {
    path:'tools/notes/questionnaire',
    component:QuestionnaireComponent,
    data:{title:"Questionnaire"}
  },
  {
    path:'tools/notes/questionnaire/:id',
    component:QuestionListComponent
  },
  {
    path:'tools',
    component:ToolsComponent,
    data:{title:"Tools"}
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(workRouteConfig)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class WorkRoutingModule { }
