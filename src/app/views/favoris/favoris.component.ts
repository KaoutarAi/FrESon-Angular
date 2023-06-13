import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent {
  aboPlaylists!: Observable<Playlist[]>;
  aboMusiques!: Observable<Musique[]>;

  constructor(private srvUtilisateur: UtilisateurService) { }

  ngOnInit(): void {
      this.reload();
  }

  private reload() {
      this.aboPlaylists = this.srvUtilisateur.findAboPlaylist();
      this.aboMusiques = this.srvUtilisateur.findAboMusique();


  }

}
