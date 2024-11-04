import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../models/vehicle.model';
import { Input } from '@angular/core';
import { SimpleChanges } from '@angular/core';
import { VehicleDetailService } from '../vehicle-detail.service';

@Component({
  selector: 'app-vehicle-calendar',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './vehicle-calendar.component.html',
  styleUrl: './vehicle-calendar.component.scss',
})
export class VehicleCalendarComponent {
  viewDate: Date = new Date(2022, 10, 15);
  events: CalendarEvent[] = [];
  view: CalendarView = CalendarView.Month;
  activeDayIsOpen: boolean = false;
  @Input() vehicles: Vehicle[] = [];
  constructor(private vehicleDetailService: VehicleDetailService) {}

  ngOnInit() {
    const data = this.vehicles;
    const transformedData = this.transformData(data);
    this.events = transformedData;
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['vehicles']) {
      this.ngOnInit();
    }
  }

  transformData(data: any[]): CalendarEvent[] {
    return data.map((item) => {
      const start = item.startDate;
      const title = `${item.brand} (${item.type})`; // brand and type
      const color = this.getStatusColor(item.status); // status
      const meta: Vehicle = {
        ...item,
      };
      return {
        start,
        title,
        color,
        meta,
      };
    });
  }

  getStatusColor(status: string) {
    switch (status.toUpperCase()) {
      case 'REGISTERED':
        return { primary: '#1e90ff', secondary: '#1e90ff' };
      case 'DEREGISTERED':
        return { primary: '#ff7f50', secondary: '#ff7f50' };
      default:
        return { primary: '#ffffff', secondary: '#ffffff' }; // Default color for any other status
    }
  }

  dayClicked(day: any) {
    if (
      this.viewDate.getTime() === day.date.getTime() &&
      this.activeDayIsOpen === true
    ) {
      this.activeDayIsOpen = false;
      return;
    }
    this.viewDate = new Date(day.date);
    this.activeDayIsOpen = true;
  }

  vehClicked(vehicle: any) {
    this.vehicleDetailService.selectVehicle(vehicle.event.meta);
  }
}
