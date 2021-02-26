import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRequestRoutingModule } from './reservation-request-routing.module';
import { ReservationRequestEditComponent } from './reservation-request-edit/reservation-request-edit.component';
import { ReservationRequestViewComponent } from './reservation-request-view/reservation-request-view.component';
import { ReservationRequestListComponent } from './reservation-request-list/reservation-request-list.component';


@NgModule({
  declarations: [ReservationRequestEditComponent, ReservationRequestViewComponent, ReservationRequestListComponent],
  imports: [
    CommonModule,
    ReservationRequestRoutingModule
  ]
})
export class ReservationRequestModule { }
