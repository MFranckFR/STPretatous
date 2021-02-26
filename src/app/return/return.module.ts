import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReturnRoutingModule } from './return-routing.module';
import { ReturnListComponent } from './return-list/return-list.component';
import { ReturnEditComponent } from './return-edit/return-edit.component';
import { ReturnViewComponent } from './return-view/return-view.component';


@NgModule({
  declarations: [ReturnListComponent, ReturnEditComponent, ReturnViewComponent],
  imports: [
    CommonModule,
    ReturnRoutingModule
  ]
})
export class ReturnModule { }
