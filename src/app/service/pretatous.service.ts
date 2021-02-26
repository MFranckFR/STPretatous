import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PretatousService {

  url: string = 'http://localhost:5555/usernames';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { 
  }

    pseudoSearchLike(pseudo: string){
      // return this.http.get<Array<string>>(this.url + '?q=' + pseudo);
      return ['toto'];
    }
}
