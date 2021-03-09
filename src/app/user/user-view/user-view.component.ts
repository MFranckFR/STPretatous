import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PretatousService } from 'src/app/service/pretatous.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  id!: string;
  user!: User;

  constructor(private route: ActivatedRoute,private router: Router, private pretatousService: PretatousService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      
    this.pretatousService.getOneUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      });
  }

  goToEdit(){
    this.router.navigateByUrl('/user/user-edit/' + this.id);
  }

}
