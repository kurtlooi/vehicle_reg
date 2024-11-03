import { Component } from '@angular/core';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { DataService } from '../data.service';

import * as Papa from 'papaparse';

@Component({
  selector: 'app-vehicle-calendar',
  standalone: true,
  imports: [
    CalendarModule
  ],
  templateUrl: './vehicle-calendar.component.html',
  styleUrl: './vehicle-calendar.component.scss'
})
export class VehicleCalendarComponent {
  viewDate: Date = new Date();
  events: Event[] = [];

  constructor(private dataService: DataService) {}

  async ngOnInit() {

      const data = this.dataService.getDataFromCsv(); 
      const transformedData = this.transformData(data);
      this.events = [...this.events, ...transformedData];
  }
  
  transformData(data: any[]): any[] {
    return data.map((item) => ({
      start: new Date(item[2]), // start_date
      end: new Date(item[3]),   // end_date
      title: `${item[6]} ${item[7]}`, // brand and type
      color: this.getStatusColor(item[1]), // status
      meta: {
        uuid: item[0],            // uuid
        status: item[1],          // status
        startDate: item[2],       // start_date
        endDate: item[3],         // end_date
        time: item[4],            // time
        userUuid: item[5],        // user_uuid
        brand: item[6],           // brand
        type: item[7],            // type
        userType: item[8],        // user_type
      },
    }));
  }
  

  
  getStatusColor(status: string) {
    switch (status.toUpperCase()) {
      case 'REGISTERED':
        return { primary: '#1e90ff' };
      case 'DEREGISTERED':
        return { primary: '#ff7f50' };
      default:
        return { primary: '#ffffff' }; // Default color for any other status
    }
  }
  
}
