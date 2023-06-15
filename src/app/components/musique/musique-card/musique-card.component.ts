import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Musique } from 'src/app/models/musique/musique';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'app-musique-card',
  templateUrl: './musique-card.component.html',
  styleUrls: ['./musique-card.component.css']
})
export class MusiqueCardComponent implements OnInit, OnDestroy {
  @Input() musique!: Musique;

  constructor(
    public router: Router,
    public srvPlaylist: PlaylistService
  ){}


  
  paused: boolean = true;
  dureeMusique!: number; 
  stringDureeMusique!: string;
  currentTime!: number;
  stringCurrentTime!: string;
  currentVolume: number = 0.5;
  nValue!: number;
  stopped: boolean = true;
  audio:HTMLAudioElement = new Audio();
  
  ngOnDestroy(): void {
    this.onStop();
  }
  
  ngOnInit(): void {
    this.audio.currentTime = 0;
    this.audio.pause;
    this.onStop();
  }


  public onPlay(){
    this.paused = false;
    this.audio.src = this.musique.linkAudio;
    this.stopped = false;
    if(this.currentTime > 0){
      this.audio.currentTime = this.currentTime;
    }

    this.audio.play();
    
    this.audio.addEventListener("timeupdate", () => {
      this.currentTime = Number(this.audio.currentTime.toFixed(0));
      this.dureeMusique = Number(this.audio.duration.toFixed(0));
      this.stringDureeMusique  = this.srvPlaylist.convertElapsedTime(this.dureeMusique);
      this.stringCurrentTime = this.srvPlaylist.convertElapsedTime(this.currentTime);
    });
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

  onVolumeChange(value: string){
    this.nValue = Number(value);
    this.audio.volume = this.nValue;
    this.currentVolume = this.audio.volume;
  }

  public onTimeChange(value: string){
    this.nValue = Number(value);
    this.audio.currentTime = this.nValue;
    this.currentTime = this.nValue;
  }

  public onStop(){
    this.onPause()
    this.audio.src = "";
    this.currentTime = 0;
    this.stopped = true;
  }

}
