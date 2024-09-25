import { Component } from '@angular/core';

@Component({
  selector: 'app-server-staus',
  standalone: true,
  imports: [],
  templateUrl: './server-staus.component.html',
  styleUrl: './server-staus.component.css'
})
export class ServerStausComponent {
  currentStatus = 'online';
}
