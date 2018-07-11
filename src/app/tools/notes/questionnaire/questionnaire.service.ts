import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { UrlProviderService } from "../../../shared/url-provider.service";
import { IQuestion } from "./question";



@Injectable()
export class QuestionnaireService{

    constructor(private _http:HttpClient,private _urlProvider:UrlProviderService){
        
    }
    getQuestionnaire(): any {
        let serviceUrl = this._urlProvider.API_URL + "/questions/GetQuestionnaire";
        return this._http.get<any[]>(serviceUrl)
        .do(data=>console.log('All' + JSON.stringify(data)))
        .catch(this.handleError);
      }
      getQuestionnaireById(id: Number):Observable<any[]>{
        let serviceUrl = this._urlProvider.API_URL + "/questions/getquestions";
        return this._http.get<any[]>(serviceUrl, 
                {params:
                    {
                        categoryId:id.toString()
                    }
                })
                    .do(data=>console.log('All' + JSON.stringify(data)))
                    .catch(this.handleError);
    }
    saveQuestion(question:IQuestion){
        let serviceUrl = this._urlProvider.API_URL + "/questions";
       
        return this._http.post<any[]>(serviceUrl, 
            JSON.stringify(question)
            )
                .do(data=>console.log('All' + JSON.stringify(data)))
                .catch(this.handleError);
    }
    updateQuestion(question:IQuestion){
        let serviceUrl = this._urlProvider.API_URL + "/questions/update";
       console.log(serviceUrl,question)
        return this._http.post<any[]>(serviceUrl, 
            JSON.stringify(question)
            )
                .do(data=>console.log('All' + JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        return  Observable.throw(err.message);
    }

}