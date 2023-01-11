import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  host="http://localhost:8081/restapicategorie";
  constructor( private client:HttpClient ) { }
  public categories!: Categorie[]; 

  public getAllCategories():Observable<Categorie[]>{ 
    return this.client.get<Categorie[]>(this.host+"/all");
  }

  public getCategorieById(id:string):Observable<Categorie>{
    return this.client.get<Categorie>(this.host+"/getCategorie/"+id);
  }
  public addCategorie(fd: FormData):Observable<void>{
    return this.client.post<void>(this.host+"/add",fd);
  }

  public deleteCategorie(id:number):Observable<void>{
    return this.client.delete<void>(this.host+"/delete/"+id);
  }
  public updateCategorie(fd: FormData):Observable<void>{
    return this.client.put<void>(this.host+"/update",fd);
  }
}
