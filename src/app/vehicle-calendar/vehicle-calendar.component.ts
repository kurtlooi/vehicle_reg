import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarEvent, CalendarModule, CalendarView } from 'angular-calendar';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vehicle-calendar',
  standalone: true,
  imports: [CommonModule, CalendarModule],
  templateUrl: './vehicle-calendar.component.html',
  styleUrl: './vehicle-calendar.component.scss'
})
export class VehicleCalendarComponent {
  viewDate: Date = new Date(2022, 10, 15); 
  events: CalendarEvent[] = [];
  view: CalendarView = CalendarView.Month;
  activeDayIsOpen: boolean = false;
  constructor(private dataService: DataService) {}

  async ngOnInit() {
      const data = this.dataService.getDataFromCsv(); 
      const transformedData = this.transformData(data);
      this.events =transformedData
  }
  
  transformData(data: any[]): CalendarEvent[] {
    return data.map((item) => {
      var [day, month, year] = item[2].split('/').map(Number);
      const start = new Date(year, month - 1, day); // start_date
      [day, month, year] = item[3].split('/').map(Number);
      const end = new Date(year, month - 1, day); // start_date
      const title = `${item[6]} ${item[7]}`; // brand and type
      const color = this.getStatusColor(item[1]); // status
      const meta: any = {
        uuid: item[0], // uuid
        status: item[1], // status
        startDate: start, // start_date
        endDate: end, // end_date
        time: item[4], // time
        userUuid: item[5], // user_uuid
        brand: item[6], // brand
        type: item[7], // type
        userType: item[8], // user_type
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
    if (this.viewDate.getTime()===day.date.getTime()&&this.activeDayIsOpen=== true){
      this.activeDayIsOpen = false; return
    }
    this.viewDate=new Date(day.date)
    this.activeDayIsOpen = true;
  }

  vehClicked(vehicle: any) {
    console.log(vehicle.event.meta)
  }
}
