import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Playlist } from 'src/app/models/musique/playlist';
import { Tag } from 'src/app/models/musique/tag';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Playlist[]> {
        return this.httpClient.get<Playlist[]>(`${environment.apiUrl}/playlist`);
  }

  public findAllPublic(): Observable<Playlist[]> {
        return this.httpClient.get<Playlist[]>(`${environment.apiUrl}/playlist/public`);
  }

  public findById(id: number): Observable<Playlist> {
        return this.httpClient.get<Playlist>(`${environment.apiUrl}/playlist/${id}`);
  }

  public findByContaining(searchType: string, substring?: string, tag?: Tag, page?: number, limit?: number): Observable<Playlist[]> {

    let baseUrl: string =  `${environment.apiUrl}/playlist/par-${ searchType }?substring=${ substring }`;
        if(searchType == "etiquette") {
            baseUrl =  `${environment.apiUrl}/playlist/par-${ searchType }?tag=${ tag }`;
        }
        const paginationParameters: string = this.paginationParametersString(page, limit);
        return this.httpClient.get<Playlist[]>(`${ baseUrl }${ paginationParameters }`);
  }

  public findAllBy(topType: string) {
        return this.httpClient.get<Playlist[]>(`${environment.apiUrl}/playlist/plus-${ topType }`)
  }

  public findTopBy(topType: string, limit?: number) {
    const baseUrl: string = `${environment.apiUrl}/playlist/plus-${ topType }/top`;
    if (!limit) {
        return this.httpClient.get<Playlist[]>(`${ baseUrl}`);
    }
    return this.httpClient.get<Playlist[]>(`${ baseUrl}?limit=${ limit }`);
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

  public add(playlist: any): Observable<Playlist> {
    return this.httpClient.post<Playlist>(`${ environment.apiUrl}/playlist`, playlist);
  }

  public edit(playlist: any): Observable<Playlist> {
    return this.httpClient.put<Playlist>(`${ environment.apiUrl}/playlist/${playlist.id}`, playlist);
  }

  public delete(playlist: Playlist): Observable<void> {
    return this.httpClient.delete<void>(`${ environment.apiUrl}/playlist/${playlist.id}`);
  }


  public convertElapsedTime(inputSeconds: number){
    var seconds: any = Math.floor(inputSeconds % 60);
    if(seconds < 10){
      seconds = "0" + String(seconds);
    }
    var minutes: any = Math.floor(inputSeconds / 60);
    return minutes + " : " + seconds;
  }
}
