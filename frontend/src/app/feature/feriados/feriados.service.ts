import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Feriados } from './feriados';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOption ={
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8080/api/holiday";

  public save(feriados: Feriados): Observable<Feriados>{
    return this.http.post<Feriados>(this.url+"/save",feriados, this.httpOption);
  }

  public findById(id: number): Observable<Feriados>{
    return this.http.get<Feriados>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<Feriados>{
    return this.http.delete<Feriados>(this.url+"/deleteById/"+id,this.httpOption);
  }
}
