import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Corralon } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class CorralonService extends ApiService<Corralon>{

  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'corralon'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}

}
