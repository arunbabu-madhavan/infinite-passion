import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
   questionnaireText:string = "Questionnaire";
   questionnairerouterLink:any[]= ['questionnaire'];
  constructor() { }
  ngOnInit() {
    document.body.style.backgroundColor="#000";
  }
  ngOnDestroy(){
    document.body.style.backgroundColor="#fff";
  }

}
