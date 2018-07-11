import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component'
import { NotesComponent } from './notes.component';
import { RouterModule } from '@angular/router';
import { QuestionnaireService } from './questionnaire/questionnaire.service';
import { QuestionListComponent } from './questionnaire/question-list/question-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NewQuestionComponent } from './questionnaire/question-list/new-question/new-question.component';
@NgModule({
  imports: [
    CommonModule,RouterModule,BrowserAnimationsModule,FormsModule,SharedModule
  ],
  declarations: [QuestionnaireComponent,NotesComponent, QuestionListComponent, NewQuestionComponent],
  providers:[QuestionnaireService]
})
export class NotesModule { }
