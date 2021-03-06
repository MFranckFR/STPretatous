import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { contactService  } from './contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  // FormData!: FormGroup;
  contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  optionsSelect!: Array<any>;

  @HostListener('input') oninput() {

    if (this.contactForm.valid) {
      this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private contactService: contactService) {

    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
      'contactFormSubjects': ['', Validators.required],
      'contactFormMessage': ['', Validators.required],
      //'contactFormCopy': [''],
    });
  }

  // onSubmit(FormData) {
  //   console.log(FormData);
  //   this.contact.PostMessage(FormData).subscribe(response => {
  //     location.href = 'https://mailthis.to/confirm'
  //   console.log(response)
  //   }, error => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  //   })
  //   }

  onSubmit() {
    this.contactService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Votre message a bien été envoyé.');
      this.contactForm.reset();
      this.disabledSubmitButton = false;
    }, error => {
      console.log('Error', error);
    });
  }

  onReset(){
    this.contactForm.reset();
  }


  ngOnInit(): void {
  }

}
