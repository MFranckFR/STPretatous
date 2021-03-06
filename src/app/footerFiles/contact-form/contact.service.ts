import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class contactService {
  url: string = 'http://localhost:5555/contact_messages';

  // private api = 'https://mailthis.to/alias'

  constructor(private http: HttpClient) { }

  sendMessage(messageContent: any) {
    messageContent.id = Date.now();
    console.log('contact_mail', messageContent);
    return this.http.post(this.url,
      JSON.stringify(messageContent),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }
}
