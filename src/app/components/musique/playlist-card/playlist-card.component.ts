import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';

@Component({
  selector: 'playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent {
    @Input() playlist!: Playlist;

}
