

import { Component, OnInit, HostListener } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PretatousService } from '../../service/pretatous.service';



@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  
  // ////////////////////////////////////////////////////

  userForm: FormGroup;
  disabledSubmitButton: boolean = true;
  fieldTextType!: boolean;
  submitted = false;

  @HostListener('input') oninput() {

    if (this.userForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private pretatousService: PretatousService) {

    this.userForm = fb.group({  
      'login': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

   get f() { return this.userForm.controls; }

  onSubmit() {
    this.pretatousService.createAccount(this.userForm.value).subscribe(() => {
      alert('Votre inscription a bien été enregistrée.');
      this.userForm.reset();
      this.disabledSubmitButton = false;
    }, error => {
      console.log('Error', error);
    });
  }

  onReset(){
    this.userForm.reset();
  }
  
  toggleFieldTextType(){
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnInit(): void {
  }

  
}






