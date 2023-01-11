import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domaine } from '../models/domaine';
@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  host="http://localhost:8081/restapidomaine";

  constructor( private client:HttpClient) { }
  public domaines!: Domaine[];

  public getAllDomaines():Observable<Domaine[]>{
    return this.client.get<Domaine[]>(this.host+"/all");
  }
}
