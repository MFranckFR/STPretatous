import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationViewComponent } from './reservation-view/reservation-view.component';
import { ReservationEditComponent } from './reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';


@NgModule({
  declarations: [ReservationViewComponent, ReservationEditComponent, ReservationListComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
