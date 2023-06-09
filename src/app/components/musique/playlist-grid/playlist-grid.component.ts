import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';

@Component({
  selector: 'playlist-grid',
  templateUrl: './playlist-grid.component.html',
  styleUrls: ['./playlist-grid.component.css']
})
export class PlaylistGridComponent {
    @Input() playlists!: Observable<Playlist[]>;
    @Output() ondelete: EventEmitter<void> = new EventEmitter<void>();
    @Input() editable: boolean = false;

    onDelete() {
        console.log("IN PARENT");

        this.ondelete.emit();
    }
}
