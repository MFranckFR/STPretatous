import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PretatousService } from 'src/app/service/pretatous.service';

@Component({
  selector: 'app-booking-add',
  templateUrl: './booking-add.component.html',
  styleUrls: ['./booking-add.component.css']
})
export class BookingAddComponent implements OnInit {

  bookingForm: FormGroup;


  constructor(private fb: FormBuilder, private pretatousService: PretatousService) { 
    this.bookingForm = fb.group({
      'product': [''], 
      'owner': [''], 
      'loaner': [''], 
      'dtBkingStart': [''], 
      'dtBkingEnd': [''],
    })
  }

  onSubmit(){
    this.pretatousService.createBookingRequest(this.bookingForm.value).subscribe(()=>{
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
