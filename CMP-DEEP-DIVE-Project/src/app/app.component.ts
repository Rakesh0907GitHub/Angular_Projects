import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStausComponent } from "./dashboard/server-staus/server-staus.component";
import { TrafficComponent } from "./dashboard/traffic/traffic.component";
import { TicketsComponent } from "./dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStausComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {
  
}
