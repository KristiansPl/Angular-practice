import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './user';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  private _url = 'https://rickandmortyapi.com/api/character';

  private userData: any ={
    userName: "",
    password: "",
    popup: false
  }

  private loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public setUserData(value: string, value2: string, value3: boolean){
    this.userData.userName = value;
    this.userData.password = value2;
    this.userData.popup = value3;
    this.loggedIn.next(true);
  }

  getUser(): any{
    return this.userData;
    /* if(this.userData.userName){
      return this.userData;
    }
    else{
      return this.http.get<IUser>(this._url);
    } */
  }

  logOut(){
    this.userData.userName = "";
    this.userData.password = "";
    this.userData.popup = false;
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }
  
  data = {}

  getMory(){
  }
}
