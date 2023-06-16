
import { Component, Input, OnInit, OnDestroy, HostListener, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

import { Observable, lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'playlist-buttons',
  templateUrl: './playlist-buttons.component.html',
  styleUrls: ['./playlist-buttons.component.css']
})
export class PlaylistButtonsComponent implements OnInit, OnDestroy, OnChanges{
  @Input() playlistId!: number;
  playlist!: Playlist;
  musiques!: Musique[];
  paused: boolean = true;
  source: string = "#";
  isFavorite!: boolean;
  isMine: boolean = false;
  private audio = new Audio();

  dureeMusique!: number;
  stringDureeMusique!: string;
  currentTime!: number;
  stringCurrentTime!: string;
  currentVolume: number = 0.5;
  nValue!: number;
  @Input() currentTrack: number = 0;
  shuffled: boolean = false;
  @Output() musicindex: EventEmitter<number> = new EventEmitter<number>();

  obsPlaylist!: Observable<Playlist[]>;

  constructor(
    private srvPlaylist: PlaylistService,
    private srvUtilisateur: UtilisateurService,
    private srvAuth: AuthenticationService,
    private router: Router
    ) {}

    ngOnChanges(changes: SimpleChanges): void {

        if (this.musiques) {
        this.source = this.musiques[this.currentTrack].linkAudio;
        this.audio.play;
        this.currentTime = 0;
        this.onPlay();
        }
    }
;

    ngOnDestroy(): void {
      this.stop();
    }

  ngOnInit(): void {
    this.srvPlaylist.findById(this.playlistId).subscribe((playlist: Playlist) => {
      this.playlist = playlist;
    //   this.musiques = playlist.musiques;
      if (!this.musiques) {
        this.musiques = new Array<Musique>()
      }
      playlist.musiques.forEach(m => {
        this.musiques.push(m);
      });
      this.source = this.musiques[0].linkAudio;
      if (this.playlist.utilisateurId == this.srvAuth.id) {
        this.isMine = true;
     }
    });
     this.checkedFav();


  }





  public onPlay(){
    this.paused = false;
    this.audio.src = this.source;
    if(this.currentTime > 0){
      this.audio.currentTime = this.currentTime;
    }
    this.musicindex.emit(this.currentTrack)
    this.audio.play();

    this.audio.addEventListener("timeupdate", () => {
      this.currentTime = Number(this.audio.currentTime.toFixed(0));
      this.dureeMusique = Number(this.audio.duration.toFixed(0));
      this.stringDureeMusique  = this.srvPlaylist.convertElapsedTime(this.dureeMusique);
      this.stringCurrentTime = this.srvPlaylist.convertElapsedTime(this.currentTime);
    })

    this.audio.addEventListener('ended', () => {
      this.onEnd();
    })
  }

  public onPause(){
    this.paused = true;
    this.currentTime = this.audio.currentTime
    this.audio.pause();
  }

  onMute(){
    if (this.currentVolume > 0){
      this.audio.volume = 0;
      this.currentVolume = 0;
    }
    else {
      this.audio.volume = 0.5;
      this.currentVolume = 0.5;
    }

  }

  public onVolumeChange(value : string){
    this.nValue = Number(value);
    this.audio.volume = this.nValue;
    this.currentVolume = this.audio.volume;
  }

  public onShuffle(){
    if (this.shuffled) {
      this.shuffled = false
    }
    else {
      this.shuffled = true;

    }
    this.currentTrack = Math.floor(Math.random()* this.musiques.length+1)
    this.source = this.musiques[this.currentTrack].linkAudio;
    this.audio.play;
    this.currentTime = 0;
    this.onPlay();
  }

  public onLast(){
    if(this.shuffled){
      this.onShuffle();
      this.shuffled = true;
    }
    else{
      if (this.currentTrack == 0) {
        this.currentTrack = 0;
      }
      else{
        this.currentTrack -= 1;
      }
      this.source = this.musiques[this.currentTrack].linkAudio;
      this.currentTime = 0;
      this.onPlay();
    }
  }

  public onNext(){
    if(this.shuffled){
      this.onShuffle();
      this.shuffled = true;
    }
    else {
      if(this.currentTrack < this.musiques.length){
        this.currentTrack += 1;
      }
      else {
        this.currentTrack = 0;
      }
      this.source = this.musiques[this.currentTrack].linkAudio;
      this.audio.play;
      this.currentTime = 0;
      this.onPlay();
    }
  }

  public onEnd(){
      this.onNext();
  }

  public onTimeChange(value: string){
    this.nValue = Number(value);
    this.audio.currentTime = this.nValue;
    this.currentTime = this.nValue;
  }


  checkedFav() {
    this.isLiked().then((result) => this.isFavorite = result);
  }

async isLiked() {
    let res: boolean = false;
    const favPlaylists = await lastValueFrom(this.srvUtilisateur.findAboPlaylist());
    for (let p of favPlaylists) {
        if (this.playlistId == p.id) {
                res = true;
                break;
            }
        }
    return res;
    }

  onLike() {
    this.srvUtilisateur.likePlaylist(this.playlist).subscribe(() => {
        this.checkedFav();
    })
  }


  public stop(){
    this.onPause()
    this.audio.src = "";
    this.currentTime = 0;
  }

  onClickEdit() {
    this.router.navigate(['/ajouter-playlist'], { queryParams: {id: this.playlist.id}})
  }

  onClickDuplicate() {
    let duplicatePlaylist = this.playlist;
    console.log("MUSIC HERE: " + duplicatePlaylist.musiques);

    duplicatePlaylist.utilisateurId = this.srvAuth.id;
    this.srvPlaylist.add(duplicatePlaylist).subscribe(playlist => {
        console.log("MUSIC SENT: " + playlist.musiques);

        this.router.navigate(['/ajouter-playlist'], { queryParams: {id: playlist.id}})
    });

  }

}
