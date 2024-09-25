import { Component, Input, OnInit } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent implements OnInit {

@Input() rooms : RoomList[]=[];

  constructor() {}

  ngOnInit(): void {
    
  }

}
