import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Musique } from 'src/app/models/musique/musique';

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {

  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<Musique[]> {
        return this.httpClient.get<Musique[]>(`${environment.apiUrl}/musique`);
  }
}
