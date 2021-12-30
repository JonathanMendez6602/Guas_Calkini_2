import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chofer } from '../../shared/intefaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class ChoferService extends ApiService<Chofer>{

//private apiURL = "http://127.0.0.1:8000/api/chofer";
    constructor(private httpClient: HttpClient){
        super(httpClient);
    }
    root(): string{ 
        return 'chofer'
    }  
    httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
        })
    }
}
