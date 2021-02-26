import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRequestEditComponent } from './reservation-request-edit.component';

describe('ReservationRequestEditComponent', () => {
  let component: ReservationRequestEditComponent;
  let fixture: ComponentFixture<ReservationRequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRequestEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
