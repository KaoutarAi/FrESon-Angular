import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    playlistsMostPopular!: Observable<Playlist[]>;
    playlistsMostRecent!: Observable<Playlist[]>;

    constructor(private srvPlaylist: PlaylistService) { }

    ngOnInit(): void {
        this.reload();
    }

    private reload() {
        this.playlistsMostPopular = this.srvPlaylist.findTopBy("vues");
        this.playlistsMostRecent = this.srvPlaylist.findTopBy("recents", 4);


      }
}
