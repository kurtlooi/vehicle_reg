import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VehicleCalendarComponent } from './vehicle-calendar/vehicle-calendar.component'; // Import your calendar component
import { VehicleService } from './vehicle.service';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { Vehicle } from './models/vehicle.model';
import { VehicleTableComponent } from './vehicle-table/vehicle-table.component';
import { VehicleDetailService } from './vehicle-detail.service';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VehicleCalendarComponent,
    VehicleListComponent,
    VehicleTableComponent,
    VehicleDetailComponent,
    FilterPanelComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vehicles: Vehicle[] = [];
  filteredVehicles: Vehicle[] = [];
  selectedVehicle: Vehicle | null = null;
  showTable: Boolean = false;

  constructor(
    private vehicleService: VehicleService,
    private vehicleDetailService: VehicleDetailService
  ) {
    this.vehicleService.vehicleData$.subscribe((data: Vehicle[]) => {
      this.vehicles = data;
      this.filteredVehicles = data;
    });
  }

  ngOnInit() {
    // Subscribe to the selected vehicle changes
    this.vehicleDetailService.selectedVehicle$.subscribe(
      (vehicle: Vehicle | null) => {
        this.selectedVehicle = vehicle; // Update the selected vehicle
      }
    );
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
applyView(showTable: boolean) {
  this.showTable = showTable;
}
}
