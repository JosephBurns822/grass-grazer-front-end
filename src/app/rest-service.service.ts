import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(
    private http: HttpClient
  ) {}

  post(uri:string, data:any): Observable<any>{
    return this.http.post(environment.baseUrl+uri, data)

  }
  get(uri:string): Observable<any>{
    return this.http.get(environment.baseUrl+uri)

  }

}
