import { Component, OnInit, HostListener } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MustMatch } from '../../password-match/MustMatch';
import { PretatousService } from '../../service/pretatous.service';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})

export class SubscribeComponent implements OnInit {
  
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
      
      'pseudo': ['', Validators.required],
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'address': ['', [Validators.required]],
      'addressAdd': ['', [Validators.required]],
      'zipCode': ['', [Validators.required]],
      'city': ['', [Validators.required]],
      'country': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'mobile': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirmPassword': ['', [Validators.required]],
    });
  }

   get f() { return this.userForm.controls; }

  onSubmit() {
    this.pretatousService.addUser(this.userForm.value).subscribe(() => {
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
