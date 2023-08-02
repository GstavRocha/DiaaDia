import { Injectable } from '@angular/core';
import {LoginFake} from "./LoginFake";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUser: LoginFake | null = null
  constructor() {
  }
  login(username: string, password: string):boolean{
    if(username === '1' && password === '1'){
      const user: LoginFake = {username, password}
      this.loggedInUser = user;
      return true
    }
    return false
  }
  logout(): void{
    this.loggedInUser = null;
  }
  isLoggedIn(): boolean{
    return this.loggedInUser !== null;
  }
}
