import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
export abstract class ApiService<T> {
    private readonly prefix :string = 'http://127.0.0.1:8000/api';

    constructor (protected http:HttpClient){}

    public abstract root(): string;

    protected get uri(): string{
        return `${this.prefix}/${this.root()}`;
    }
    public getAll(params?: {}):Observable<T[]>{
        return this.http.get<T[]> (`${this.uri}`, {params: this.getParams(params)});
    }
    public create(e: T): Observable<T>{
        return this.http.post<T>(this.uri, e);
    }
    public find (id: number, relations: boolean=true): Observable<T>{
        return this.http.get<T> (`${this.uri}/${id}${!relations ? `?rel=${relations}`: ''}`);
    }
    public update(id:number, e: T): Observable<T>{
        return this.http.put<T>(this.uri+'/'+id, e);
    }
    public delete(id:number): Observable<T>{
        return this.http.delete<T>(this.uri+'/'+id);
    }
    public getParams(params: {}): HttpParams{
        let hp = new HttpParams();
        return hp;
    }
}