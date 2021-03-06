
import { Component, OnInit } from '@angular/core';
import { PretatousService } from 'src/app/service/pretatous.service';



@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  userAccount:any = [];

  constructor(private pretatousService: PretatousService) {}

  ngOnInit() {
    this.loadUser()
  }

  //Charger la liste des comptes Utilisateurs
  loadUser(){
    return this.pretatousService.getAllUser().subscribe((data: {}) => {
      this.userAccount = data;
    })
  }

  //Pour effacer des comptes utilisateurs
  deleteUserAccount(id: any){
  if (window.confirm('Voulez-vous vraiment supprimer ce compte utilisateur?')){
    this.pretatousService.deleteUser(id).subscribe(data => {
      this.loadUser()
    })
  }
}  

}

