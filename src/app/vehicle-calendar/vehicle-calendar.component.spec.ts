import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleCalendarComponent } from './vehicle-calendar.component';

describe('VehicleCalendarComponent', () => {
  let component: VehicleCalendarComponent;
  let fixture: ComponentFixture<VehicleCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
