import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from './models/vehicle.model';
import { HttpClient } from '@angular/common/http';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private basePath = 'assets/data/'; // Path to the data directory
  private vehicleData = new BehaviorSubject<Vehicle[]>([]);
  vehicleData$ = this.vehicleData.asObservable();

  constructor(private http: HttpClient) {
    this.loadVehicles(); // Load vehicles on service initialization
  }

  // Load vehicles from CSV files
  private loadVehicles(): void {
    const csvFiles = ['master.csv'];

    const vehicles: Vehicle[] = [];

    // Process each CSV file
    csvFiles.forEach((file) => {
      this.readCsvFile(file)
        .then((data) => {
          vehicles.push(...data);
          // Update the BehaviorSubject with the collected vehicle data
          this.vehicleData.next(vehicles);
        })
        .catch((error) => {
          console.error('Error reading vehicle data:', error);
        });
    });
  }

  // Read and parse a single CSV file
  private readCsvFile(file: string): Promise<Vehicle[]> {
    return new Promise((resolve, reject) => {
      const path = `${this.basePath}${file}`;
      this.http
        .get(path, { responseType: 'text' }) // Get CSV file as text
        .subscribe({
          next: (csvText) => {
            Papa.parse(csvText, {
              header: true,
              dynamicTyping: true, // Automatically convert numbers to numbers
              skipEmptyLines: true, // Skip empty lines
              complete: (result) => {
                const vehicles: Vehicle[] = result.data.map((row: any) => ({
                  uuid: row.uuid,
                  status: row.status,
                  startDate: this.parseDate(row.start_date), // Ensure these column names match your CSV
                  endDate: this.parseDate(row.end_date),
                  time: row.time,
                  userUuid: row.user_uuid,
                  brand: row.brand,
                  type: row.type,
                  group: row.user_type,
                }));
                resolve(vehicles);
              },
            });
          },
          error: (error) => {
            console.error('Error fetching vehicle data:', error);
            reject(error);
          },
        });
    });
  }

  private parseDate(dateString: string): Date {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day); // Month is 0-indexed
  }

  // Function to update vehicle data if needed
  updateVehicleData(data: Vehicle[]) {
    this.vehicleData.next(data);
  }
}
