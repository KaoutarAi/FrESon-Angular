import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.css']
})
export class PlaylistCardComponent {
    @Input() playlist!: Playlist;
    @Input() editable: boolean = false;
    @Output() suppression: EventEmitter<void> = new EventEmitter<void>();

    constructor(
        public router: Router,
        private srvPlaylist: PlaylistService
      ) { }


      onClickDelete(playlist : Playlist) {
        this.srvPlaylist.delete(playlist).subscribe(() => {
            this.suppression.emit();
        });

      }

      onClickEdit(id: number) {
        this.router.navigate(['/ajouter-playlist'], { queryParams: {id: id}})
      }
}
