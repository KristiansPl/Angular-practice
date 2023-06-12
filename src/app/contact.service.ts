import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { IContact } from './contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private router: Router) { }

  private _url = "/assets/data/MOCK_DATA.json";

  getContact(): Observable<IContact[]>{
    return this.http.get<IContact[]>(this._url);
  }
}
