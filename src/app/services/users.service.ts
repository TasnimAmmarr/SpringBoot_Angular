import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  host="http://localhost:8081/restapiuser";
  constructor(private client: HttpClient) { }


  public getAllUsers():Observable<User[]>{
    return this.client.get<User[]>(this.host+"/all");
  }

  public getUserById(id:number):Observable<User>{
    return this.client.get<User>(this.host+"/getUser/"+id);
  }
  public addUser(fd:FormData):Observable<User>{
    return this.client.post<User>(this.host+"/add",fd);
  }
}
