import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<Utilisateur[]> {
    return this.httpClient.get<Utilisateur[]>(`${ environment.apiUrl }/utilisateur`);
  }

  public findAboPlaylist(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>(`${ environment.apiUrl }/utilisateur/favoris/playlists`);
  }

  public findAboMusique(): Observable<Musique[]> {
    return this.httpClient.get<Musique[]>(`${ environment.apiUrl }/utilisateur/favoris/musiques`);
  }

  public add(utilisateur: any): Observable<Utilisateur> {
    return this.httpClient.post<Utilisateur>(`${ environment.apiUrl }/utilisateur/inscription`, utilisateur);
  }

  public edit(utilisateur: any): Observable<Utilisateur> {
    return this.httpClient.put<Utilisateur>(`${ environment.apiUrl }/utilisateur/${ utilisateur.id }`, utilisateur);
  }

  public resetMdp(utilisateur: any): Observable<Utilisateur> {
    return this.httpClient.put<Utilisateur>(`${ environment.apiUrl }/utilisateur/reset-mdp/${ utilisateur.pseudo }`, utilisateur);
  }

  public delete(utilisateur: Utilisateur): Observable<void> {
    return this.httpClient.delete<void>(`${ environment.apiUrl }/utilisateur/pseudo/${ utilisateur.pseudo }`);
  }
}
