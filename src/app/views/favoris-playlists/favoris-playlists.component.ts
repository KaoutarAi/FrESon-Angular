import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-favoris-playlists',
  templateUrl: './favoris-playlists.component.html',
  styleUrls: ['./favoris-playlists.component.css']
})
export class FavorisPlaylistsComponent {

  aboPlaylists!: Observable<Playlist[]>;
  constructor(private srvUtilisateur: UtilisateurService) { }

  ngOnInit(): void {
    this.aboPlaylists = this.srvUtilisateur.findAboPlaylist();
  }

}
