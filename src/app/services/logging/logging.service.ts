import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Logging } from 'src/app/models/logging/logging';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Logging[]>{
      return this.httpClient.get<Logging[]>(`${environment.apiUrl}/logging`);
  }

  public add(logging: any): Observable<Logging>{
    return this.httpClient.post<Logging>(`${environment.apiUrl}/logging`, logging);
  }

  public edit(logging: any): Observable<Logging>{
    return this.httpClient.put<Logging>(`${environment.apiUrl}/logging/${logging.id}`, logging);
  }

  public delete(logging: Logging): Observable<void>{
    return this.httpClient.delete<void>(`${environment.apiUrl}/logging/${ logging.id }`);
  }

  public findByYear(year: string): Observable<Logging[]> {
    return this.httpClient.get<Logging[]>(`${environment.apiUrl}/logging/date/${year}`);
  }

  public findByMonth(year: string, month:string): Observable<Logging[]> {
    return this.httpClient.get<Logging[]>(`${environment.apiUrl}/logging/date/${year}/${month}`);
  }

  public findByDay(year: string, month:string, day: string): Observable<Logging[]> {
    return this.httpClient.get<Logging[]>(`${environment.apiUrl}/logging/date/${year}/${month}/${day}`);
  }

  public findByText(text: string): Observable<Logging[]> {
    return this.httpClient.get<Logging[]>(`${environment.apiUrl}/logging/infos/${text}`);
  }

  public findByPseudo(pseudo: string): Observable<Logging[]> {
    return this.httpClient.get<Logging[]>(`${environment.apiUrl}/logging/utilisateur/${pseudo}`);
  }

  public deleteByPseudo(pseudo: string): Observable<void>{    
    return this.httpClient.delete<void>(`${environment.apiUrl}/logging/utilisateur/${pseudo}`);
  }

  public deleteByYear(year: string): Observable<void>{
    return this.httpClient.delete<void>(`${environment.apiUrl}/logging/date/${year}`);
  }

  public deleteByMonth(year: string, month: string): Observable<void>{
    return this.httpClient.delete<void>(`${environment.apiUrl}/logging/date/${year}/${month}`);
  }

  public deleteByDay(year: string, month: string, day: string): Observable<void>{
    console.log(year);
    console.log(month);
    console.log(day);
    return this.httpClient.delete<void>(`${environment.apiUrl}/logging/date/${year}/${month}/${day}`);
  }
}
