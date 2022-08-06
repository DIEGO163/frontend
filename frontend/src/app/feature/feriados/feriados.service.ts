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

  private url: string = "http://localhost:8080/api/feriados";

  public save(holidayDay: Feriados): Observable<Feriados>{
    return this.http.post<Feriados>(this.url+"/save",holidayDay, this.httpOption);
  }

  public findById(id: number): Observable<Feriados>{
    return this.http.get<Feriados>(this.url+"/"+id, this.httpOption);
  }

  public deleteById(id: number): Observable<Feriados>{
    return this.http.delete<Feriados>(this.url+"/deleteById/"+id,this.httpOption);
  }

  public findAll():Observable<Feriados[]>{
    return this.http.get<Feriados[]>(this.url+"/findAll",this.httpOption);
  }

  public findByDescription(term: string):Observable<Feriados[]>{
    return this.http.get<Feriados[]>(this.url+"/findByDescription/"+term,this.httpOption);
  }
}
