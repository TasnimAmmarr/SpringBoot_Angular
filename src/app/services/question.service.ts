import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Question } from '../models/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  host="http://localhost:8081/restapiquestion";

  constructor( private client:HttpClient) { }
  public questions!: Question[];

  public getAllQuestions():Observable<Question[]>{ 
    return this.client.get<Question[]>(this.host+"/all");
  }

  public getQuestionByCategorie(idc:number):Observable<Question[]>{
    return this.client.get<Question[]>(this.host+"/getByC/"+idc);
  }

  public saveQuestion(fd: FormData):Observable<void>{
    return this.client.post<void>(this.host+"/add",fd);
  }

  public deleteQuestion(id:number):Observable<void>{
    return this.client.delete<void>(this.host+"/delete/"+id);
  }

  public updateQuestion(fd: FormData):Observable<void>{
    return this.client.put<void>(this.host+"/update",fd);
  }

  public getQuestionById(id:string):Observable<Question>{
    return this.client.get<Question>(this.host+"/getQuestion/"+id);
  }
  public getByCat(cat: Categorie):Observable<Question[]>{
    return this.client.get<Question[]>(this.host+"/getByC/"+cat.id);
  }


}
