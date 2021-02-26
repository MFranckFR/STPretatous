import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { PretatousService } from '../service/pretatous.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  personnes: any = [];

  personneForm = this.fb.group({});

  constructor(private fb: FormBuilder, private service: PretatousService) { }

  ngOnInit(): void {
    this.personneForm = this.fb.group({
      pseudo: ['', [Validators.required, this.checkPseudoValidator]],
      nom: ['', [Validators.required, this.checkInputValidator]],
      prenom: ['', [Validators.required, this.checkInputValidator]],
      email: ['', {Validators: [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)], updateOn:'blur'}],
      adresse: this.fb.group({
        rue: [''],
        ville: [''],
        codePostal: ['']
      }),
    });
    
  }

  checkInputValidator(control: FormControl) {
    const str: string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z') {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }
  checkPseudoValidator(control: FormControl) {
    // const pseudo: string = control.value;
    // const result: Array<string> = this.service.pseudoSearchLike(pseudo);
    // console.log('checkPseudoValidator_result: ', result);
    // return this.service.pseudoSearchLike(pseudo).length === 0 ? null : {erreur: 'pseudo déjà utilisé'};
    return null;
  }
  
  get nom() {
    return this.personneForm.get('nom');
  }
  get pseudo() {
    return this.personneForm.get('pseudo');
  }
  get prenom() {
    return this.personneForm.get('prenom');
  }

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value });
    console.log(this.personneForm.value);
    this.personneForm.reset();
  }

}
