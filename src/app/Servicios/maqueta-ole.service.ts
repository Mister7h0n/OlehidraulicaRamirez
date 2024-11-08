import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaquetaOleService {

  constructor (private http:HttpClient) { }

  ObtenerDatos():Observable<any>{
return this.http.get("assets/Data/data.json");
  
  }
}