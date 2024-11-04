import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent, VehicleListComponent, FilterPanelComponent],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    VehicleListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
