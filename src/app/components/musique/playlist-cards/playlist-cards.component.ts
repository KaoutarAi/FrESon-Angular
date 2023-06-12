import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';

@Component({
  selector: 'playlist-cards',
  templateUrl: './playlist-cards.component.html',
  styleUrls: ['./playlist-cards.component.css']
})
export class PlaylistCardsComponent {
    @Input() playlists!: Observable<Playlist[]>;
    @Input() slideTitle!: string;
    @Input() displayMore!: any;
}
