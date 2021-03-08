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
    const token_initialize:string = 'ODY5YTA0NzYxODgyN2Q3NGYxYzBlMDJhMDIzMTkxZmU0NGRjZmQ4OWEzM2IyMDY4YWI1NTJjYmQyM2FhMTEwZS8vLy8vLzQ3MTg';
    this.headers4post = new HttpHeaders({ 'Content-Type': 'application/json', 'x-tag': token_initialize });


   }

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})}

/**
 * Crockford decycling
 * Eviter de déserialiser un objet dejà désérialisé, ce qui provoque l'erreurs
 *
 * stringify a comme second parametre une foncion qui permet d'écarter les objets déjà déserialisés.
 * Mais cette méthode oblige à concerver une liste des objets déja déserialisés.
 * La méthode de Crockford permet d'eviter celà.
 * Erreor: ... cyclic object value
 * Usage:
 * Stringify(decycle(myObject))
 *
 * replaces recursive references with nulls
 * sources:
 * - https://github.com/douglascrockford/JSON-js/blob/master/cycle.js
 * - https://stackoverflow.com/questions/9382167/serializing-object-that-contains-cyclic-object-value 
 *
 * @param {*} obj
 * @param {*} [stack=[]]
 * @returns Object or null
 * @memberof PretatousService
 */
// decycle(obj:Object, stack=[]):Object {
//     if (! obj || typeof obj !== 'object'){
//         return obj;
//     }
//     if (stack.includes(obj)){
//       return {}; //null
//     }
//     let s = stack.concat([obj]);
//     return Array.isArray(obj) ? 
//       obj.map(x => decycle(x, s))
//       : Object.fromEntries(Object.entries(obj).map(
//           ([k, v]) => [k, decycle(v, s)]));
// }

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

updateProduct(id: String, data: Product): Observable<any> {
  let url = `${this.url}/products/${id}`;
  console.log('updateProduct', id);
  return this.http.patch(url, data)
  .pipe(
    catchError(this.handleError)
  )
}
///////////////////////////////// BookingRequest ////////////////////////////////////
createBookingRequest(bookingRequest: any):Observable<any>{
  var cache = [];
  let url = `${this.url}/bookingrequests`;
  console.log('createBookingRequest', bookingRequest);
  return this.http.post(url,
    JSON.stringify(bookingRequest),
    { headers: this.headers4post, responseType: 'json' });
}



////////////////////////////////////PRODUCT IMAGE FETCH FROM API///////////////////:id', component:
getImage(imageUrl: string): Observable<Blob> {
  return this.http.get(imageUrl, { responseType: 'blob' });
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
