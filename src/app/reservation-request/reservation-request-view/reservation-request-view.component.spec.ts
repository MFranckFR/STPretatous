import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRequestViewComponent } from './reservation-request-view.component';

describe('ReservationRequestViewComponent', () => {
  let component: ReservationRequestViewComponent;
  let fixture: ComponentFixture<ReservationRequestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRequestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
