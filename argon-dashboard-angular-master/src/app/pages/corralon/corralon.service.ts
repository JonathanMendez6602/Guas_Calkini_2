import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Corralon } from './corralon';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class CorralonService {
 
  private apiURL = "http://127.0.0.1:8000/api/corralon";
  private URLMostrar = "http://127.0.0.1:8000/api/vehiculo";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Corralon[]> {
    return this.httpClient.get<Corralon[]>(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAllMostrar(): Observable<Vehiculo[]>{
    return this.httpClient.get<Vehiculo[]>(this.URLMostrar+"/corralon")
  }

  create(corralon): Observable<Corralon> {
    return this.httpClient.post<Corralon>(this.apiURL, JSON.stringify(corralon), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  find(id): Observable<Corralon> {
    return this.httpClient.get<Corralon>(this.apiURL +"/"+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findID(id): Observable<Vehiculo> {
    return this.httpClient.get<Vehiculo>(this.URLMostrar +"/"+ id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  update(id, corralon): Observable<Corralon> {
    return this.httpClient.put<Corralon>(this.apiURL +'/'+ id, JSON.stringify(corralon), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
 
  delete(id){
    return this.httpClient.delete<Corralon>(this.apiURL +'/'+ id, this.httpOptions)
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
