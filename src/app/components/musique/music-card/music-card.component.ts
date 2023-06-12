import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Musique } from 'src/app/models/musique/musique';

@Component({
  selector: 'music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit{
    @Input() musique!: Musique;
    imageUrl!: string;
    selected: number = 0
    @Output() selection: EventEmitter<any[]> = new EventEmitter<any[]>();
    // @Output() selectMusique: EventEmitter<Musique> = new EventEmitter<Musique>();

    ngOnInit(): void {
        this.imageUrl = this.musique.image.replace(/width=(\d+)/, "width=130");
    }

    onClick() {
        this.selected = (this.selected + 1) % 2;

        this.selection.emit([this.selected,
                          this.musique]);
        // this.selectMusique.emit(this.musique);
    }




}
