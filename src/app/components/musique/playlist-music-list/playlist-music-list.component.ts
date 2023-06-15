import { AfterViewChecked, Component, HostListener, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'playlist-music-list',
  templateUrl: './playlist-music-list.component.html',
  styleUrls: ['./playlist-music-list.component.css']
})
export class PlaylistMusicListComponent implements OnInit{
  @Input() playlistId!: number;
  playlist!: Playlist;
  musiques!: Musique[];
  duree: string = "0 : 00"
  isSmallScreen: boolean = false;

  constructor(
    private srvPlaylist: PlaylistService
    ) {}


  ngOnInit(): void {
    this.srvPlaylist.findById(this.playlistId).subscribe((playlist: Playlist) => {
      this.playlist = playlist;
      this.musiques = playlist.musiques;

    })
    if(window.innerWidth < 800) {
        this.isSmallScreen = true;
       }

       this.onResize();

  }


  public setTime(duree: number){
    return this.srvPlaylist.convertElapsedTime(duree);
    }

    public imgSource(initialSrc: string, width: number): string {
        return initialSrc.replace(/width=(\d+)/, `width=${width}`);
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        if (window.innerWidth > 800) {
            this.isSmallScreen = false;
        }
        else {
            this.isSmallScreen = true;
        }
    }

}
