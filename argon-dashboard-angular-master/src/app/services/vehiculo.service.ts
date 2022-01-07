import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';


@Injectable({
  providedIn: 'root'
})
export class VehiculoService extends ApiService<Vehiculo>{
  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'vehiculo'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}
getAllMostrar() {
  return this.httpClient.get<Vehiculo[]>(this.uri+"/corralon")
}

Obtener(){
  return this.httpClient.get<Vehiculo[]>(this.uri +"/obtener")
}

}
