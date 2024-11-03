import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleCalendarComponent } from './vehicle-calendar/vehicle-calendar.component'; // Import your calendar component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehicleCalendarComponent], // Include it in imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Note: it should be `styleUrls` (plural)
})
export class AppComponent {
}
