
import { Component } from '@angular/core';
import { APIService } from './api.service';

interface User{
  name: String;
  id: Number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NoteApp';
  usersList: User[] = [];
  
  constructor(apiService: APIService){
    apiService.getUsers().subscribe((data: User[])=> {
      console.log(data);
      this.usersList = data;
    })
  }
}

