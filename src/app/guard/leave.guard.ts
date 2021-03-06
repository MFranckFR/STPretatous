import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SubscribeComponent } from '../backup/subscribe/subscribe.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<SubscribeComponent> {
  canDeactivate(
    component: SubscribeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
      return false;
    // return component.personneForm.pseudo === undefined ||
    // component.personneForm.nom === undefined ||
    // component.personneForm.prenom === undefined ||
    // component.personneForm.email === undefined ||
    // component.personneForm.adresse === undefined ||
    // component.personneForm.pseudo.length === 0 ||
    // component.personneForm.prenom.length === 0 ||
    // component.personneForm.email.length === 0 ||
    // component.personneForm.adresse.length === 0 ||
    // confirm('Voulez-vous vraiment quitter ce formulaire ?');
  }
  
}
