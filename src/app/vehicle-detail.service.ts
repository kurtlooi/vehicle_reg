import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from './models/vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleDetailService {
  private selectedVehicleSubject = new BehaviorSubject<Vehicle | null>(null);
  selectedVehicle$ = this.selectedVehicleSubject.asObservable();

  selectVehicle(vehicle: Vehicle) {
    this.selectedVehicleSubject.next(vehicle);
  }

  clearSelection() {
    this.selectedVehicleSubject.next(null);
  }
}
