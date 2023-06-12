import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'plus-vues',
  templateUrl: './plus-vues.component.html',
  styleUrls: ['./plus-vues.component.css']
})
export class PlusVuesComponent implements OnInit {
    playlistsByMostViewed!: Observable<Playlist[]>;
    constructor(private srvPlaylist: PlaylistService) { }

    ngOnInit(): void {
        this.playlistsByMostViewed = this.srvPlaylist.findAllBy("vues");
    }


}
