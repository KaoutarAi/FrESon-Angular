import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Musique } from 'src/app/models/musique/musique';
import { MusiqueDetailed } from 'src/app/models/musique/musique-detailed';

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {

  constructor(private httpClient: HttpClient) { }
  public findAll(): Observable<Musique[]> {
        return this.httpClient.get<Musique[]>(`${environment.apiUrl}/musique`);
  }

  public findAllByPopularity(page?: number, limit?: number): Observable<Musique[]> {
    const paginationParameters: string = this.paginationParametersString(page, limit);
    return this.httpClient.get<Musique[]>(`${environment.apiUrl}/musique/popularite?`)
  }

  public findById(id: number): Observable<MusiqueDetailed> {
    return this.httpClient.get<MusiqueDetailed>(`${environment.apiUrl}/musique/${id}`);
  }

  public findByContaining(search: string, substring: string, page?: number, limit?: number): Observable<Musique[]> {
    const baseUrl: string = `${environment.apiUrl}/musique/par-${search}?substring=${substring}`;
    const paginationParameters: string = this.paginationParametersString(page, limit);
    return this.httpClient.get<Musique[]>(`${ baseUrl }${ paginationParameters }`);
  }

  // function to manage the parameters of pagination
  public paginationParametersString(page?: number, limit?: number): string {
    if (typeof limit === 'undefined') {// Therefore we don't care about page (first by default), by default (Java) we get a limit of 10
        return "";
    }

    if (typeof page === 'undefined') {// Limit the number of returns
        return `&limit=${ limit }`;
    }
    return `&page=${ page }&limit=${ limit }`;
  }

  public add(musique: any): Observable<Musique> {
    return this.httpClient.post<Musique>(`${ environment.apiUrl}/musique`, musique);
  }

  public edit(musique: any): Observable<Musique> {
    return this.httpClient.put<Musique>(`${ environment.apiUrl}/musique/${ musique.id }`, musique)
  }

  public delete(musique: Musique): Observable<void> {
    return this.httpClient.delete<void>(`${ environment.apiUrl}/musique/${musique.id}`);
  }
  //TODO findByAlbumId
}
