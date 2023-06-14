import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Commentaire } from 'src/app/models/utilisateur/commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private httpClient: HttpClient) { }

  public findAllByPlaylist(id: number): Observable<Commentaire[]> {
    return this.httpClient.get<Commentaire[]>(`${environment.apiUrl}/commentaire/playlist/${id}`);
  }

  public add(commentaire: any, id:number): Observable<Commentaire> {
    return this.httpClient.post<Commentaire>(`${environment.apiUrl}/commentaire/playlist/${id}/commenter`, commentaire);
  }

  public edit(commentaire: any): Observable<Commentaire> {
    return this.httpClient.put<Commentaire>(`${environment.apiUrl}/commentaire/${commentaire.id}`, commentaire);
  }

  public delete(commentaire: any): Observable<void> {
    return this.httpClient.delete<void>(`${environment.apiUrl}/commentaire/${commentaire.id}`)
  }
}
