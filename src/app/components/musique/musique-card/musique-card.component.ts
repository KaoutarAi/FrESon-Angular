import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Musique } from 'src/app/models/musique/musique';

@Component({
  selector: 'app-musique-card',
  templateUrl: './musique-card.component.html',
  styleUrls: ['./musique-card.component.css']
})
export class MusiqueCardComponent {
  @Input() musique!: Musique;

  constructor(
    public router: Router
  ){}

}
