import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleCalendarComponent } from './vehicle-calendar/vehicle-calendar.component'; // Import your calendar component
import { VehicleService } from './vehicle.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { Vehicle } from './models/vehicle.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VehicleCalendarComponent,
    VehicleListComponent,
    FilterPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService) {
    this.vehicleService.vehicleData$.subscribe((data) => {
      this.vehicles = data;
      this.filteredVehicles = data;
    });
  }

  applyFilter(filter: { status: string; group: string }) {
    this.filteredVehicles = this.vehicles.filter((vehicle) => {
      const matchesStatus =
        filter.status === 'All' ||
        vehicle.status.toLowerCase() === filter.status.toLowerCase();
      const matchesType =
        filter.group === 'All' ||
        vehicle.group.toLowerCase() === filter.group.toLowerCase();
      return matchesStatus && matchesType;
    });
  }
}
