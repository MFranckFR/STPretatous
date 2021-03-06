import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/interface/account';
import { PretatousService } from 'src/app/service/pretatous.service';



@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  id!: number;
  
  account!: Account;

  constructor(
    // public fb: FormBuilder,
    public pretatousService: PretatousService, 
    public Route: ActivatedRoute,
    public router: Router,
  ) { }

  

  //   var id = this.actRoute.snapshot.paramMap.get('id') || '';
  //   this.pretatousService.getUserAccountById(id).subscribe(data => {
      
  
  //     this.userForm = this.fb.group({
  //       login: [data.login, [Validators.required]],
  //       password: [data.password, [Validators.required]],
  //     })      
  //   })    
  // }

  //   // this.pretatousService.getUserAccountById(this.id).subscribe(data=> {
  //   //   this.userForm.setValue(data)
  //   // })

  // ngOnInit() {
  // }


  // public handleError = (controlName: string, errorName: string) => {
  //   return this.userForm.controls[controlName].hasError(errorName);
  // }
  
  // updateAccount() {
  //   var id = this.actRoute.snapshot.paramMap.get('id') || '';
  //   if(window.confirm('Voulez-vous mettre à jour le compte utilisateur')){
  //     this.pretatousService.updateUserAccount(id, this.userForm.value).subscribe(data => {
  //       this.router.navigate(['/users-list'])
  //     })
  //   }
  // }

  ngOnInit(): void {
    
    this.id = this.Route.snapshot.params['id'];
    this.pretatousService.getOneUser(this.id).subscribe( data => {
      console.log(data);
      this.account = data ;
    })
  }


  updateAccount(){
    if (window.confirm('Souhaitez-vous mettre à jour le compte ?')) {
    this.pretatousService
    .updateOneUser(this.id, this.account)
    .subscribe( (data) => {
      console.log(data);
    });
    this.router.navigateByUrl('user/users-list');
  }
}
}
