import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';

@Component({
  selector: 'app-musique-grid',
  templateUrl: './musique-grid.component.html',
  styleUrls: ['./musique-grid.component.css']
})
export class MusiqueGridComponent {
  @Input() musiques!: Observable<Musique[]>;

}
