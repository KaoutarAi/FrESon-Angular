import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit{
    id: number = 0;
    playlist!: Playlist;

    constructor(
        private activatedRoute: ActivatedRoute,
        private srvPlaylist: PlaylistService
        ) {};

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            this.id = params["id"];
        });
        this.srvPlaylist.findById(this.id).subscribe(p => {
            this.playlist = p;
        });
    }


}
