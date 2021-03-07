import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PretatousService } from '../service/pretatous.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;

  constructor(private fb: FormBuilder, private pretatousService: PretatousService) {
    this.bookingForm = fb.group({
      'bookingReq': [''],
      'product': [''],
      'owner': [''],
      'loaner': [''],
      'dtBkingStart': [''],
      'dtBkingEnd': [''],

    })
   }

   onSubmit(){
    this.pretatousService.createBooking(this.bookingForm.value).subscribe(()=>{
      this.bookingForm.reset();
    }, (error) => {
      console.log('Error, error');
    });
  }

  onReset() {
    this.bookingForm.reset();
  }

  ngOnInit(): void {
  }

}
