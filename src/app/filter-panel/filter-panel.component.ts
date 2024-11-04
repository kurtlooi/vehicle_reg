import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Observable, of, startWith, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatAutocompleteModule,
    MatInputModule,
    CommonModule,
  ],
})
export class FilterPanelComponent implements OnInit {
  @Output() filterChange = new EventEmitter<{
    status: string;
    group: string;
  }>();

  statusOptions: string[] = ['All', 'Registered', 'Deregistered'];
  groupOptions: string[] = ['All', 'personal', 'commercial'];
  selectedStatus = 'All';
  selectedGroup = 'All';

  typeControl = new FormControl('');
  filteredTypes: Observable<string[]> = of([]);

  ngOnInit() {}

  applyFilter() {
    this.filterChange.emit({
      status: this.selectedStatus,
      group: this.selectedGroup,
    });
  }
}
