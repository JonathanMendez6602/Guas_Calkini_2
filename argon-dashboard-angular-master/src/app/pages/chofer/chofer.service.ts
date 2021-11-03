import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Chofer } from './chofer';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {

  private apiURL = "http://127.0.0.1:8000/api/chofer";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Chofer[]> {
   return this.httpClient.get<Chofer[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }


 create(chofer): Observable<Chofer> {
   return this.httpClient.post<Chofer>(this.apiURL, JSON.stringify(chofer), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Chofer> {
   return this.httpClient.get<Chofer>(this.apiURL +"/"+ id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, chofer): Observable<Chofer> {
   return this.httpClient.put<Chofer>(this.apiURL +'/'+ id, JSON.stringify(chofer), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Chofer>(this.apiURL +'/'+ id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }
}
