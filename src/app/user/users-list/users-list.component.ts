import {Component, OnInit} from '@angular/core';
import {PretatousService} from 'src/app/service/pretatous.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({selector: 'app-users-list', templateUrl: './users-list.component.html', styleUrls: ['./users-list.component.css']})

export class UsersListComponent implements OnInit {

    userList : any = [];

    constructor(
      private pretatousService : PretatousService, private router : Router, private route : ActivatedRoute) {}

    ngOnInit() {
        this.loadUser()
    }

    // Charger la liste des comptes Utilisateurs
    loadUser() {
        return this.pretatousService.getAllUsers().subscribe((data : {}) => {
            this.userList = data;
        })
    }

    // Pour effacer des comptes utilisateurs
    deleteUserAccount(id : any) {
        if (window.confirm('Voulez-vous vraiment supprimer ce compte utilisateur?')) {
            this.pretatousService.deleteUser(id).subscribe(data => {
                this.loadUser()
            })
        }
    }

    goToView(id:string){
      this.router.navigateByUrl('user/user-view/' + id);
    }

}

