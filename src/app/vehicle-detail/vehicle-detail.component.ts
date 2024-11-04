import {
  Component,
  HostListener,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { Vehicle } from '../models/vehicle.model';
import { VehicleDetailService } from '../vehicle-detail.service';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent implements OnInit, OnChanges {
  selectedVehicle: Vehicle | null = null;
  isMobileView: boolean = window.innerWidth < 768;
  isVisible: boolean = false;

  constructor(
    private vehicleDetailService: VehicleDetailService,
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngOnInit(): void {
    // Subscribe to vehicle selection changes
    this.vehicleDetailService.selectedVehicle$.subscribe((vehicle: any) => {
      this.selectedVehicle = vehicle;
      this.isVisible = !!vehicle; // Show the component if a vehicle is selected
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Handle changes to selectedVehicle if needed
    if (changes['selectedVehicle'] && this.selectedVehicle) {
      this.isVisible = true; // Show the component when a vehicle is selected
    }
  }

  closeDetail() {
    this.vehicleDetailService.clearSelection(); // Clear vehicle selection in service
    this.isVisible = false; // Hide the detail component
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEsc(event: Event) {
    this.closeDetail();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobileView = (event.target as Window).innerWidth < 768; // Update mobile view status on resize
  }
}
