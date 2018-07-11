import { Component, OnInit } from '@angular/core';
import { QuestionnaireService } from './questionnaire.service';

@Component({
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  
})
export class QuestionnaireComponent implements OnInit {
  questionnaires:any[];
  constructor(private _questionnaireService:QuestionnaireService) { }

  ngOnInit() {
    this._questionnaireService.getQuestionnaire()
    .subscribe( questionnaires => this.questionnaires = questionnaires);
  }

}
