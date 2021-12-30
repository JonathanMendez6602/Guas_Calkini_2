import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grua } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class GruaService extends ApiService<Grua>{

  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'grua'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

getcambio(id){
  return this.httpClient.get<Grua>(this.uri +"/cambiob/"+ id)
}

}
