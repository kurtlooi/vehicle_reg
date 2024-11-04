import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { Vehicle } from '../models/vehicle.model';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.scss'],
  imports: [CommonModule, MatCardModule, MatPaginator],
})
export class VehicleListComponent implements OnInit, OnChanges {
  @Input() vehicles: Vehicle[] = []; // This will receive the filtered vehicles
  paginatedVehicles: Vehicle[] = [];
  currentPage: number = 0;
  pageSize: number = 10; // Number of vehicles to display per page

  ngOnInit() {
    this.updatePaginatedVehicles(); // Initialize paginated vehicles
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['vehicles']) {
      this.currentPage = 0; // Reset to first page
      this.updatePaginatedVehicles(); // Update paginated vehicles on vehicle list change
    }
  }

  // Update the paginated vehicles based on the current page
  updatePaginatedVehicles() {
    const startIndex = this.currentPage * this.pageSize;
    this.paginatedVehicles = this.vehicles.slice(
      startIndex,
      startIndex + this.pageSize
    );
  }

  // Handle page change
  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedVehicles(); // Update the displayed vehicles on page change
  }
}
