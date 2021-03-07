import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PretatousService } from '../service/pretatous.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanForm: FormGroup;

  constructor(private fb: FormBuilder, private pretatousService: PretatousService) {
    this.loanForm = fb.group({
      'booking': [''],
      'product': [''],
      'owner': [''],
      'loaner': [''],
      'dtBkingStart': [''],
      'dtBkingEnd': [''],
      'dtRtrn': [''],
      'productStatus': [''],
    })
   }

   onSubmit(){
    this.pretatousService.createLoan(this.loanForm.value).subscribe(()=>{
      this.loanForm.reset();
    }, (error) => {
      console.log('Error, error');
    });
  }

  onReset() {
    this.loanForm.reset();
  }

  ngOnInit(): void {
  }

}
