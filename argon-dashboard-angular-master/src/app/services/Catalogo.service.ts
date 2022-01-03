import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Catalogo } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService extends ApiService<Catalogo>{

  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'catalogo'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}


getValor(tipoVehiculo){
  return this.httpClient.get<Catalogo>(this.uri +"/tipo/"+ tipoVehiculo);
}

}
