import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private srvPlaylist: PlaylistService
    ) {};

  ngOnInit(): void {
    this.srvPlaylist.findById(this.playlistId).subscribe((playlist: Playlist) => {
      this.playlist = playlist;
      this.musiques = playlist.musiques;
      this.nbTitres = this.musiques.length;
      this.musiques.forEach(m => {
        this.tpsTotalN += m.duree;
      });
    })
  }

  public setTime(duree: number){
    return this.srvPlaylist.convertElapsedTime(duree);
    }
}
