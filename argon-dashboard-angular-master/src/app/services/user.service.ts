import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../shared/interfaces';
import { ApiService } from '../../shared/api.services';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService<User>{


  constructor(private httpClient: HttpClient){
    super(httpClient);
}
root(): string{ 
    return 'User'
}  
httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
}


}
