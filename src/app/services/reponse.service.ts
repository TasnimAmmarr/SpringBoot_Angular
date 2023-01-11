import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reponse } from '../models/reponse';
import { Question } from '../models/question';
@Injectable({
  providedIn: 'root'
})
export class ReponseService {

  host="http://localhost:8081/restapireponse";
  constructor(private client:HttpClient) { }
  public reponses!: Reponse[];

  public getAllReponses():Observable<Reponse[]>{ 
    return this.client.get<Reponse[]>(this.host+"/all");
  }

  public getByQuestion(idq: number):Observable<Reponse[]>{
    return this.client.get<Reponse[]>(this.host+"/getByQuestion/"+idq);
  }

  public saveReponse(fd: FormData):Observable<void>{
    return this.client.post<void>(this.host+"/add",fd);
  }

  public deleteReponse(id:number):Observable<void>{
    return this.client.delete<void>(this.host+"/delete/"+id);
  }

  public updateReponse(fd: FormData):Observable<void>{
    return this.client.put<void>(this.host+"/update",fd);
  }
  
  public getReponseById(id:number):Observable<Reponse>{
    return this.client.get<Reponse>(this.host+"/getReponse/"+id);
  }


}