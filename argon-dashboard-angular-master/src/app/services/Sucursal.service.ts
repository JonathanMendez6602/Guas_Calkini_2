import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Sucursal } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class SucursalService extends ApiService<Sucursal> {

  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'sucursal'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

}
