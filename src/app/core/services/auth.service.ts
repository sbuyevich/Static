import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
import { User } from '../models/user';
 
@Injectable()
export class AuthService { 
   baseURL:string="https://api.github.com/";
 
   constructor(private http:HttpClient){
   }
 
   getRepos(userName:string): Observable<User[]> {
        return this.http.get<User[]>(this.baseURL + 'users/' + userName + '/repos')
   }
}