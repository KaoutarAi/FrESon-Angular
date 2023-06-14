import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-mes-playlists',
  templateUrl: './mes-playlists.component.html',
  styleUrls: ['./mes-playlists.component.css']
})
export class MesPlaylistsComponent implements OnInit, OnChanges {
    mesPlaylists!: Observable<Playlist[]>;

    constructor(private srvUtilisateur: UtilisateurService) { }

    ngOnInit(): void {
        this.mesPlaylists = this.srvUtilisateur.mesPlaylists();
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log("TEST");

        this.mesPlaylists = this.srvUtilisateur.mesPlaylists();
    }


    onDeleteReload() {
        console.log("IN GRANDPARENT");

        this.mesPlaylists = this.srvUtilisateur.mesPlaylists();
    }





}
