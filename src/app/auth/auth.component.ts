import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  erreur = true;
  password = '';
  login = '';
  constructor(private router: Router) { }

  ngOnInit(){}

  isAuthenticated() {
    if (this.login === 'wick' && this.password === 'john') {
  localStorage.setItem('isConnected', 'true');
  this.router.navigateByUrl('/lender');
  } else {
    this.erreur = false;
  } }
}
