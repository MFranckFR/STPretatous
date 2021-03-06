import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from '../pipe/filter.pipe';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLogout(){
    localStorage.removeItem('isConnected');
    this.router.navigate(['']);
  }

  isConnected(){ 
    if (Boolean(localStorage.getItem('isConnected'))){
      return true;
    } else {
      return false;
    }
  }

}
