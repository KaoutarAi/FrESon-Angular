import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-mes-playlists',
  templateUrl: './mes-playlists.component.html',
  styleUrls: ['./mes-playlists.component.css']
})
export class MesPlaylistsComponent {
  mesPlaylists!: Observable<Playlist[]>;
  constructor(private srvUtilisateur: UtilisateurService) { }

  ngOnInit(): void {
    this.mesPlaylists = this.srvUtilisateur.mesPlaylists();
  }

}
