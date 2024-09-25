import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RoomsListComponent } from '../rooms-list/rooms-list.component'; // Correct path
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule], // Ensure these are correct
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'] // Ensure correct style URLs
})
export class RoomsComponent {
  hotelName = 'TopForm Restaurant';
  numberOfRooms = 100;
  hideRooms = false;

  rooms: Room = {
    TotalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Delux Room',
        amenities: 'A/C, free wifi, TV, bathroom, Kitchen',
        price: 1600,
        photos: '',
        checkinTime: new Date('2024-09-10'),
        checkOutTime: new Date('2024-09-11'),
      },
      {
        roomNumber: 2,
        roomType: 'Private Room',
        amenities: 'A/C, free wifi, TV, bathroom, Kitchen',
        price: 1700,
        photos: '',
        checkinTime: new Date('2024-09-10'),
        checkOutTime: new Date('2024-09-11'),
      },
      {
        roomNumber: 3,
        roomType: '5 star Room',
        amenities: 'A/C, free wifi, TV, bathroom, Kitchen',
        price: 1000,
        photos: '',
        checkinTime: new Date('2024-09-10'),
        checkOutTime: new Date('2024-09-11'),
      },
    ];
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }
}
