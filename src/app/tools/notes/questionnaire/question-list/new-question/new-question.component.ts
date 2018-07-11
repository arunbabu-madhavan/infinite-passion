import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion } from '../../question';
import { QuestionnaireService } from '../../questionnaire.service';

@Component({
  selector: 'new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  @Input() CategoryId:number;
  btnSubmitTxt:string ="Submit"
  @Output() QuestionAdded: EventEmitter<void> = new  EventEmitter<void>();
  model:IQuestion;
  saving:boolean;
  @Input() success:boolean;
  
  constructor(private _questionService:QuestionnaireService) { }
  ngOnInit() {
    this.model = this.newModel();
  }
  
  newModel():IQuestion{
    let q:IQuestion;
    q ={
      Id:0,
      QuestionCategoryId:this.CategoryId,
      QuestionText:"",
      AnswerText:"",
    };
    return q;
  }

  save(){
    this.saving=true;
    this._questionService.saveQuestion(this.model).subscribe(()=>{this.saving = false;this.success = true;
    this.model = this.newModel();this.QuestionAdded.emit();
    },(error)=>{this.success=false;this.saving=false});
  }

}
