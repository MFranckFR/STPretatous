import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRequestListComponent } from './reservation-request-list.component';

describe('ReservationRequestListComponent', () => {
  let component: ReservationRequestListComponent;
  let fixture: ComponentFixture<ReservationRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
