import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.css']
})
export class TermsOfUseComponent implements OnInit {

  result!: string [];

  constructor(private httpService: HttpClient) {}

  ngOnInit() {
    
  }

  getAccounts() {
    this.httpService.get<any[]>('http://localhost:5555/accounts').subscribe(
        response => {
          this.result = response as string[];
        }, error => (err: HttpErrorResponse)=>{
          console.log(err.message);
        }
      )
}

}
