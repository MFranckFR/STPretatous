import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PretatousService } from '../service/pretatous.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css']
})
export class ReturnComponent implements OnInit {

  returnForm : FormGroup;

  constructor(private fb: FormBuilder, private pretatousService: PretatousService) { 

    this.returnForm = this.fb.group({

    'loan': [''],
    'product': [''],
    'owner': [''],
    'loaner': [''],
    'dtRtrn': [''],
    'productStatus': [''],
    })
  }

  onSubmit(){
    this.pretatousService.createReturn(this.returnForm.value).subscribe(()=>{
      this.returnForm.reset();
    }, (error) => {
      console.log('Error, error');
    });
  }

  onReset() {
    this.returnForm.reset();
  }

  ngOnInit(): void {
  }

}
