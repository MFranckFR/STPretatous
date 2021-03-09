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
  url: string = 'http://localhost:3000'
  headers4post!: HttpHeaders;
  
  searchOption =[];
  postData!: Product[];

  constructor(private http: HttpClient) { 
    const token_initialize:string = "NGJkNzI5YjRlMGJjMmNmNDgyMTQ3ZTMzYmM4OGVlYmYyNjFhOGE0OGUyYjExYTljZDkwYzU4OGZjYzBjNmY4Ni8vLy8vLzEzMTA=";
    this.headers4post = new HttpHeaders({ 'Content-Type': 'application/json', 'x-tag': token_initialize });
  }

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}  

///////////////////////////////////////GESTION DES INSCRIPTIONS///////////////////////////

  //Pour poster sur le server le résultat du formulaire
    addUser(subscribeContent: any):Observable<any>{
      let url = `${this.url}/users`;
      console.log('subscribeForm', subscribeContent);
      return this.http.post(url, 
        JSON.stringify(subscribeContent),
        { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
  }

    //Pour récupérer la liste de tous les subscribers
    getAllUser():Observable<any> {
      let url = `${this.url}/users/`;
      return this.http.get<User>(url)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
    }

      //Pour récupérer un subscriber
    getOneUser(id:number): Observable<any> {
      let url = `${this.url}/users/${id}`;
      return this.http.get(url)
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }

    //Pour mettre à jour un compte utilisateurs
    updateOneUser(id: number, data: User): Observable<any> {
      let url = `${this.url}/users/${id}`;
      return this.http.put(url, data)
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

  

  // getUserAccount(id: number): Observable<any> {
  //   let API_URL = `${this.url}/accounts/${id}`;
  //   return this.http.get(API_URL, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' })
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
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
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
  getOneAccount(id:number): Observable<any> {
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
    { headers: this.headers4post, responseType: 'text' });
}


//Efface un produit par son id
deleteProduct(id: any){
  let url = `${this.url}/products/${id}`;
  return this.http.delete<Product>(url, this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}

//Récupérer un produit par son id
getProduct(id:number): Observable<any> {
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
  return this.http.get<Product>(url)
  .pipe(
    retry(1),
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



updateProduct(id: number, data: Product): Observable<any> {
  let url = `${this.url}/products/${id}`;
  console.log('updateProduct', id);
  return this.http.put(url, data)
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
    { headers: this.headers4post, responseType: 'text' });
}


/////////////////////////////////GESTION DES DEMANDES DE RESERVATIONS///////////////
createBooking(booking: any): Observable<any> {
  let url = `${this.url}/bookings`;
  console.log('bookkingRequest', booking);
  return this.http.post(url, 
    JSON.stringify(booking),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}

/////////////////////////////////GESTIONS DES EMPRUNTS////////////////////

createLoan(loan: any): Observable<any> {
  let url = `${this.url}/loans`;
  console.log('loans', loan);
  return this.http.post(url, 
    JSON.stringify(loan),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}

/////////////////////////////////GESTIONS DES EMPRUNTS////////////////////

createReturn(returnProduct: any): Observable<any> {
  let url = `${this.url}/returns`;
  console.log('returns', returnProduct);
  return this.http.post(url, 
    JSON.stringify(returnProduct),
    { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'text' });
}


///////////////////////////////SEARCH BAR////////////////////////////////

searchBar(): Observable<Product[]>{
  return this.http.get<Product[]>(this.url);
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
