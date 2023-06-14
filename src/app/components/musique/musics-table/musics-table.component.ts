import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';

@Component({
  selector: 'app-musics-table',
  templateUrl: './musics-table.component.html',
  styleUrls: ['./musics-table.component.css']
})
export class MusicsTableComponent {
    @Input() musiques$!: Observable<Musique[]>;


}
