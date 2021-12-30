import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Aseguradora } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class AseguradoraService extends ApiService<Aseguradora>{


  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'aseguradora'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

}
