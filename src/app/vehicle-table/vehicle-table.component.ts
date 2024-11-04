import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Vehicle } from '../models/vehicle.model';
import { VehicleDetailService } from '../vehicle-detail.service';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-vehicle-table',
  standalone: true,
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ],
})
export class VehicleTableComponent implements OnInit, OnChanges {
  @Input() vehicles: Vehicle[] = [];
  dataSource = new MatTableDataSource<Vehicle>();
  @ViewChild('empTbSort') empTbSort = new MatSort();

  constructor(private vehicleDetailService: VehicleDetailService) {}

  columns = [
    { key: 'uuid', label: 'UUID' },
    { key: 'brand', label: 'Brand' },
    { key: 'group', label: 'Group' },
    { key: 'status', label: 'Status' },
    { key: 'startDate', label: 'Start Date' },
    { key: 'endDate', label: 'End Date' },
  ];

  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.updateTableData(this.vehicles);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.empTbSort;
    this.dataSource.sortingDataAccessor = (
      data: Vehicle,
      sortHeaderId: string
    ): string | number => {
      switch (sortHeaderId) {
        case 'startDate':
          return data.startDate.getTime();
        case 'endDate':
          return data.endDate.getTime();
        default:
          return (data as any)[sortHeaderId] as string | number;
      }
    };
  }

  ngOnChanges(): void {
    this.updateTableData(this.vehicles);
  }

  updateTableData(vehicles: Vehicle[]): void {
    this.dataSource = new MatTableDataSource(vehicles);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  get displayedColumns(): string[] {
    return this.columns.map((col) => col.key);
  }

  get displayedColumnNames(): string[] {
    return this.columns.map((col) => col.label);
  }

  onVehicleSelect(vehicle: Vehicle) {
    this.vehicleDetailService.selectVehicle(vehicle);
  }
}
