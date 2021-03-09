import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
// import { UserAccount } from '../shared/user-account';

import { User } from '../interface/user';
import { Account } from '../interface/account';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})


export class PretatousService {

    //Adresse de l'APi à consommer
  url: string = 'http://localhost:3000';
  headers4post!:HttpHeaders;

  constructor(private http: HttpClient) {
    const token_initialize:string = 'MDRiYTNmMTRmMWZlNWUzOTE2MTFjMzZhODZiOGQxY2E5MzdiYzNiOWE1NTI2ODFlZTM1YmFhYjIxNzA0NzYzNS8vLy8vLzMxNjQ';
    this.headers4post = new HttpHeaders({ 'Content-Type': 'application/json', 'x-tag': token_initialize });


   }

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}


///////////////////////////////////////GESTION DES INSCRIPTIONS///////////////////////////

  //Pour poster sur le server le résultat du formulaire
    addUser(subscribeContent: any):Observable<any>{
      let url = `${this.url}/useraccounts`;
      console.log('subscribeForm', subscribeContent);
      return this.http.post(url,
        JSON.stringify(subscribeContent),
      { headers: this.headers4post, responseType: 'json' });
  }

    //Pour récupérer la liste de tous les subscribers
    getAllUsers():Observable<any> {
      let url = `${this.url}/useraccounts/`;
      return this.http.get<User>(url)
      .pipe(
        retry(1),
        map((res: any) => {
          return res.data || {}
        }),
        catchError(this.handleError)
      )
    }

      //Pour récupérer un subscriber
    getOneUser(id:string): Observable<any> {
      let url = `${this.url}/useraccounts/${id}`;
      return this.http.get(url)
      .pipe(
        map((res: any) => {
          return res.data || {}
        }),
        catchError(this.handleError)
      )
  }

    //Pour mettre à jour un compte utilisateurs
    updateOneUser(id: string, data: User): Observable<any> {
      console.log('updateOneUser', id);
      let url = `${this.url}/useraccounts/${id}`;
      return this.http.patch(url, data)
      .pipe(
        catchError(this.handleError)
      )
  }

   //Pour effacer un compte utilisateurs
   deleteUser(id: any){
    let url = `${this.url}/users/${id}`;
    return this.http.delete<Account>(url, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }




//////////////////////////////////////GESTIONS DES UTILISATEURS////////////////////
  //Pour poster sur le serveur un userAccount 

  

  // getUserAccount(id: String): Observable<any> {
  //   let API_URL = `${this.url}/accounts/${id}`;
  //   return this.http.get(API_URL, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' })
  //     .pipe(
  //       map((res: any) => {
  //         return res || {}
  //       }),
  //       catchError(this.handleError)
  //     )
  // }

  

///////////////////////////////////////GESTION DES COMPTES UTILISATEURS///////////////////////////


  //Pour créer un compte utilisateur
  createAccount(account: any):Observable<any>{
    let url = `${this.url}/accounts`;
    console.log('createAccountForm', account);
    return this.http.post(url, 
      JSON.stringify(account),
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' });
}
  //Pour récupérer la liste de tous les comptes utilisateurs
  getAllAccount():Observable<any> {
    let url = `${this.url}/accounts/`;
    return this.http.get<Account>(url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Pour récupérer un compte utilisateur
  getOneAccount(id:string): Observable<any> {
    let url = `${this.url}/accounts/${id}`;
    return this.http.get(url)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

    //Pour mettre à jour un compte utilisateurs
    updateUserAccount(id: number, data: Account): Observable<any> {
      let url = `${this.url}/accounts/${id}`;
      return this.http.put(url, data)
      .pipe(
        catchError(this.handleError)
      )
  }

    //Pour effacer un compte utilisateurs
    deleteUserAccount(id: any){
      let url = `${this.url}/accounts/${id}`;
      return this.http.delete<Account>(url, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }
////////////////////////////////////GESTION DES PRODUITS///////////////////////////////

createProduct(product: any):Observable<any>{
  let url = `${this.url}/products`;
  console.log('createAccountForm', product);
  return this.http.post(url, 
    JSON.stringify(product),
    { headers: this.headers4post, responseType: 'json' });
}


//Efface un produit par son id
deleteProduct(id: String){
  let url = `${this.url}/products/${id}`;
  return this.http.delete<Product>(url, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

//Récupérer un produit par son id
getProduct(id:String): Observable<any> {
  let url = `${this.url}/products/${id}`;
  return this.http.get(url)
    .pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
}

//Récupère toute la liste des produits
getAllProducts():Observable<any> {
  let url = `${this.url}/products/`;
  return this.http.get<any>(url)
  .pipe(
    retry(1),
    map((res:any)=>{
      return res || {}
    }),
    catchError(this.handleError)
  )
}

getProducts(limit:number = 0):Observable<any> {
  let url = `${this.url}/products?limit=` + limit;
  return this.http.get<Product>(url)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}



updateProduct(id: String, data: Product): Observable<any> {
  let url = `${this.url}/products/${id}`;
  console.log('updateProduct', id);
  return this.http.patch(url, data)
  .pipe(
    catchError(this.handleError)
  )
}

/////////////////////////////////GESTION DES DEMANDES DE RESERVATIONS///////////////

createBookingRequest(bookingRequest: any): Observable<any> {
  let url = `${this.url}/bookingRequests`;
  console.log('bookkingRequest', bookingRequest);
  return this.http.post(url, 
    JSON.stringify(bookingRequest),
    { headers: this.headers4post, responseType: 'json' });
}


/////////////////////////////////GESTION DES DEMANDES DE RESERVATIONS///////////////
createBooking(booking: any): Observable<any> {
  let url = `${this.url}/bookings`;
  console.log('bookkingRequest', booking);
  return this.http.post(url, 
    JSON.stringify(booking),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' });
}

/////////////////////////////////GESTIONS DES EMPRUNTS////////////////////

createLoan(loan: any): Observable<any> {
  let url = `${this.url}/loans`;
  console.log('loans', loan);
  return this.http.post(url, 
    JSON.stringify(loan),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' });
}

/////////////////////////////////GESTIONS DES EMPRUNTS////////////////////

createReturn(returnProduct: any): Observable<any> {
  let url = `${this.url}/returns`;
  console.log('returns', returnProduct);
  return this.http.post(url, 
    JSON.stringify(returnProduct),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' });
}






  ////////////////////////////////GESTION DES ERREURS//////////////////////
  handleError(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
  
}
