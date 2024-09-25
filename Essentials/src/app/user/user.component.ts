import { Component,computed,EventEmitter,input,Input, output, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
// import { DUMMY_USERS } from '../dummy-users';


// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

// type User=
//   {
//     id:string,
//     avatar:string,
//     name: string,
//    };



@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  

   @Input({required: true}) user! : User;
   @Input({required:true}) selected!:boolean;
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!:string;
  // @Input({required: true}) name!:string;
  @Output() select = new EventEmitter<string>();
  //  @Output() select = new EventEmitter();


  // avatar= input.required<string>();
  // name =input.required<string>();
  // select =output<string>()

  // imgPath =computed(()=>{
  //   return 'assets/users/'+this.avatar();
  // });

  get imgPath(){
    return 'assets/users/'+this.user.avatar;
  }
  // selectedUser= signal(DUMMY_USERS[randomIndex]);
  // imgPath=computed(()=>'assets/users/'+this.selectedUser().avatar)

  // get imgPath(){
  //   return 'assets/users/'+this.selectedUser.avatar
  // }
  
  onSelUser(){
    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);

    this.select.emit(this.user.id);
  }
}
