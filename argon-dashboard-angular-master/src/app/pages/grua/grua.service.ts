import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Grua } from './grua';

@Injectable({
  providedIn: 'root'
})
export class GruaService {

  private apiURL = "http://127.0.0.1:8000/api/grua";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Grua[]> {
   return this.httpClient.get<Grua[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }


 create(grua): Observable<Grua> {
   return this.httpClient.post<Grua>(this.apiURL, JSON.stringify(grua), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Grua> {
   return this.httpClient.get<Grua>(this.apiURL +"/"+ id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, grua): Observable<Grua> {
   return this.httpClient.put<Grua>(this.apiURL +'/'+ id, JSON.stringify(grua), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Grua>(this.apiURL +'/'+ id, this.httpOptions)
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
