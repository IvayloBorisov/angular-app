import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  registerUrl: string = "http://localhost:5000/auth/register";
  loginUrl: string =  "http://localhost:5000/auth/login";

  constructor( private http: HttpClient) { }

  register(body) {
    return this.http.post(this.registerUrl, body);
  }

  login(body) {
    return this.http.post(this.loginUrl, body);
  }

  logout() {
    localStorage.clear();
  }

  isAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  getToken() {
    let token = localStorage.getItem('token');
    return token;
  }
}