import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Catalogo } from './catalogo';
import { Sucursal } from './sucursal';
import { Aseguradora } from './aseguradora';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private apiURL = "http://localhost:8000/api/catalogo";
  private aseURL = "http://localhost:8000/api/aseguradora";
  private sucURL = "http://localhost:8000/api/sucursal";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }

 constructor(private httpClient: HttpClient) { }

 getAll(): Observable<Catalogo[]>{
   return this.httpClient.get<Catalogo[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 getAllAseguradoras(): Observable<Aseguradora[]>{
  return this.httpClient.get<Aseguradora[]>(this.aseURL)
  .pipe(
    catchError(this.errorHandler)
  )
}

getAllSucursales(): Observable<Sucursal[]>{
  return this.httpClient.get<Sucursal[]>(this.sucURL)
  .pipe(
    catchError(this.errorHandler)
  )
}

 create(catalogo): Observable<Catalogo> {
  return this.httpClient.post<Catalogo>(this.apiURL, JSON.stringify(catalogo), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

createSucursal(sucursal): Observable<Sucursal> {
  return this.httpClient.post<Sucursal>(this.sucURL, JSON.stringify(sucursal), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

createAseguradora(aseguradora): Observable<Aseguradora> {
  return this.httpClient.post<Aseguradora>(this.aseURL, JSON.stringify(aseguradora), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

find(id): Observable<Catalogo> {
  return this.httpClient.get<Catalogo>(this.apiURL +'/'+ id)
  .pipe(
    catchError(this.errorHandler)
  )
}

findSucursal(id): Observable<Sucursal> {
  return this.httpClient.get<Sucursal>(this.sucURL +'/'+ id)
  .pipe(
    catchError(this.errorHandler)
  )
}

findAseguradora(id): Observable<Aseguradora> {
  return this.httpClient.get<Aseguradora>(this.aseURL +'/'+ id)
  .pipe(
    catchError(this.errorHandler)
  )
}

update(id, catalogo): Observable<Catalogo> {
  return this.httpClient.put<Catalogo>(this.apiURL +'/'+ id, JSON.stringify(catalogo), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

updateSucursal(id, sucursal): Observable<Sucursal> {
  return this.httpClient.put<Sucursal>(this.sucURL +'/'+ id, JSON.stringify(sucursal), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

updateAseguradora(id, aseguradora): Observable<Aseguradora> {
  return this.httpClient.put<Aseguradora>(this.aseURL +'/'+ id, JSON.stringify(aseguradora), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

delete(id){
  return this.httpClient.delete<Catalogo>(this.apiURL +'/'+ id, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

deleteSucursal(id){
  return this.httpClient.delete<Sucursal>(this.sucURL +'/'+ id, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

deleteAseguradora(id){
  return this.httpClient.delete<Catalogo>(this.aseURL +'/'+ id, this.httpOptions)
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
