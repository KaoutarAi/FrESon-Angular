
import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'playlist-buttons',
  templateUrl: './playlist-buttons.component.html',
  styleUrls: ['./playlist-buttons.component.css']
})
export class PlaylistButtonsComponent implements OnInit, OnDestroy{
  @Input() playlistId!: number;
  playlist!: Playlist;
  musiques!: Musique[];
  paused: boolean = true;
  liked: boolean = false;
  source: string = "#";

  obsPlaylist!: Observable<Playlist[]>;

  constructor(
    private srvPlaylist: PlaylistService,
    private srvUtilisateur: UtilisateurService, 
    private router: Router
    ) {};

    ngOnDestroy(): void {
      this.stop();
    }

  ngOnInit(): void {
    this.srvPlaylist.findById(this.playlistId).subscribe((playlist: Playlist) => {
      this.playlist = playlist;
      this.musiques = playlist.musiques;
      this.musiques.forEach(m => {
        this.musiques.push(m);
        this.source = this.musiques[0].linkAudio;
        
      });
    })
  }
  

  private audio = new Audio();

  dureeMusique!: number; 
  stringDureeMusique!: string;
  currentTime!: number;
  stringCurrentTime!: string;
  currentVolume: number = 0.5;
  nValue!: number;
  currentTrack: number = 0;
  shuffled: boolean = false;

  
  public onPlay(){
    this.paused = false;
    this.audio.src = this.source;
    if(this.currentTime > 0){
      this.audio.currentTime = this.currentTime;
    }

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

  public onLike(){
    if(this.liked){
      this.liked = false;
    }
    else{
      this.liked = true;
    }  
    this.srvUtilisateur.likePlaylist(this.playlist).subscribe(
      (response: Playlist[]) => {
        this.router.navigate([ '/favoris' ]);
      },
      (error: any) => {
        console.log(error);
      }
    );
         
  }


  public stop(){
    this.onPause()
    this.audio.src = "";
    this.currentTime = 0;
  }
  
} 
