import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'playlist-header',
  templateUrl: './playlist-header.component.html',
  styleUrls: ['./playlist-header.component.css']
})
export class PlaylistHeaderComponent implements OnInit{
  @Input() playlistId!: number;
  playlist!: Playlist;
  musiques!: Musique[];
  nbTitres!: number;
  tpsTotalN: number = 0;
  tpsTotalS: string = "";
  @Input() currentMusic: number = 0;

  constructor(
    private srvPlaylist: PlaylistService
    ) {
    };

  ngOnInit(): void {
    this.loadPlaylist().then((playlist) => {

    this.playlist = playlist;
    this.musiques = playlist.musiques;
    this.nbTitres = this.musiques.length;
    this.musiques.forEach(m => {
        this.tpsTotalN += m.duree;
  })
    });
  }

  onClickScrollToBottom() {
    // this.scroll.emit();
  }

  public setTime(duree: number){
    return this.srvPlaylist.convertElapsedTime(duree);
    }

    async loadPlaylist() {
        return await lastValueFrom(this.srvPlaylist.findById(this.playlistId));
    }
}
