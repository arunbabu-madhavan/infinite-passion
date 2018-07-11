import { Component, OnInit, OnDestroy, trigger, transition, style, animate } from '@angular/core';
import { QuestionnaireService } from '../questionnaire.service';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../../../shared/menu.service';
import { IQuestion } from '../question';
import { CommonModule } from '@angular/common';



@Component({
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1})) 
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0})) 
      ])
    ])
  ]

})
export class QuestionListComponent implements OnInit,OnDestroy {
  questionList:any[];
  addButtonText:string = "Add new..";
  expandBtnText:string = "Expand";
  currentQuestionnaire:any;
  isAllexpanded:boolean;
  addNewPopup:boolean;
  categoryId:number;

  constructor(private _route:ActivatedRoute,
                private _questionnaireService:QuestionnaireService,
                private menu:MenuService) { 
                  this.isAllexpanded = false;
                }

  ngOnInit() {
    let id =+this._route.snapshot.paramMap.get('id');
    this.categoryId = id;
    this.fillQuestionTree()
  }

  fillQuestionTree(){
    
    this._questionnaireService.getQuestionnaireById( this.categoryId)
    .subscribe(currentQuestionnaire => 
      {
        this.currentQuestionnaire = currentQuestionnaire;
        this.menu.topMenuHeader = this.currentQuestionnaire.Name;
        this.questionList = this.currentQuestionnaire.QuestionList;
      });
  }
  save(question){
    let model:IQuestion;
    
    model = {
      Id : question.Id,
      QuestionCategoryId: question.QuestionCategoryId,
      AnswerText:question.AnswerText,
      QuestionText:question.QuestionText,
    }
    this._questionnaireService.updateQuestion(model).subscribe(()=>{});
  }
  refresh(){
    this.fillQuestionTree()
    setTimeout(()=>{
        this.addNewPopup=false;
      },800);
  }
  toggle(){
    this.isAllexpanded = !this.isAllexpanded;
    this.expandBtnText = !this.isAllexpanded ? 'Expand': 'Collapse';
        this.questionList.forEach(
      (question)=>{question.showAnswer = this.isAllexpanded;question.answerEdit = false;question.edit = false}
    );
  }

  ngOnDestroy(){
    this.menu.topMenuHeader ='';
  }

}
