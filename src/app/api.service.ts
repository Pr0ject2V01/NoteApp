import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }
  getUsers = () => {
    return this.http.get('https://humorous-standing-snowman.glitch.me/users');
    
  }
  addUsers = () => {
    return this.http.post('https://humorous-standing-snowman.glitch.me/users', {name }); // :value * add
  }
}

