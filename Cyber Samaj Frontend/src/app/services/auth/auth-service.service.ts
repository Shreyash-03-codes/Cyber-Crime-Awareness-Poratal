import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient ) { }

  login(data:any){
    return this.http.post('http://localhost:8080/v1/api/auth/login',data);
  }

  register(data:any){
    return this.http.post('http://localhost:8080/v1/api/auth/signup',data);
  }
}
