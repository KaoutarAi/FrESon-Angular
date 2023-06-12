import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'plus-recentes',
  templateUrl: './plus-recentes.component.html',
  styleUrls: ['./plus-recentes.component.css']
})
export class PlusRecentesComponent implements OnInit{
    playlistMostRecent!: Observable<Playlist[]>;

    constructor(private srvPlaylist: PlaylistService) { };

    ngOnInit(): void {
        this.playlistMostRecent = this.srvPlaylist.findAllBy("recents");
    }

}
