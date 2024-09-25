import { Component } from '@angular/core';
// import { NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet, HeaderComponent,UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Essentials';
  users=DUMMY_USERS;
  selectUserId?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectUserId);
  }

  onSelUser(id:string){
    this.selectUserId=id;
  }
}
