import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Inventario } from './inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiURL = "http://127.0.0.1:8000/api/grua";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }

  
}
