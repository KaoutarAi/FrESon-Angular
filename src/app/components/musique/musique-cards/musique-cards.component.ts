import { Component, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { MusiqueCardComponent } from '../musique-card/musique-card.component';

@Component({
  selector: 'app-musique-cards',
  templateUrl: './musique-cards.component.html',
  styleUrls: ['./musique-cards.component.css']
})
export class MusiqueCardsComponent {
  @Input() musiques!: Observable<Musique[]>;
  @Input() slideTitle!: string;
  @Input() displayMore!: any;

  
}
