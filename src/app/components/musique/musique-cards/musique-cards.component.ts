import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';

@Component({
  selector: 'app-musique-cards',
  templateUrl: './musique-cards.component.html',
  styleUrls: ['./musique-cards.component.css']
})
export class MusiqueCardsComponent {
  @Input() musiques!: Observable<Musique[]>;
  @Input() slideTitle!: string;
  @Input() displayMore!: any;

  // fonction(){    
  //   document.addEventListener('onPlay', function(e){
  //     var audios = document.getElementsByTagName('audio');
  //     for(var i = 0, len = audios.length; i < len;i++){
  //         if(audios[i] != e.target){
  //             audios[i].pause();
  //         }
  //     }
  //   }, true);
  // }
}
