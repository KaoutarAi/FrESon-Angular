import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { Tag } from 'src/app/models/musique/tag';
import { MusiqueService } from 'src/app/services/musique/musique.service';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'app-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.css']
})
export class RechercherComponent implements OnInit{
  playlistForm!: FormGroup;
  typePCtrl!: FormControl;
  searchPCtrl!: FormControl;
  // limitPCtrl!: FormControl;
  tagPCtrl!: FormControl;
  playlists!: Observable<Playlist[]>;

  isPlaylistFormActive: boolean = true;
  isMusicFormActive: boolean = true;


  musicForm!: FormGroup;
  typeMCtrl!: FormControl;
  searchMCtrl!: FormControl;
  // limitMCtrl!: FormControl;
  musiques!: Observable<Musique[]>;

  constructor(title: Title, private router: Router, private srvPlaylist: PlaylistService, private srvMusique: MusiqueService, private formBuilder: FormBuilder) {
    title.setTitle("Rechercher");
  }

  ngOnInit(){
    this.typePCtrl = this.formBuilder.control('', Validators.required);
    this.searchPCtrl = this.formBuilder.control('', Validators.required);
    this.tagPCtrl = this.formBuilder.control('');
    // this.limitPCtrl = this.formBuilder.control(0);


    this.playlistForm = this.formBuilder.group({
      typeP: this.typePCtrl,
      searchP: this.searchPCtrl,
      tagP: this.tagPCtrl,
      // limitP: this.limitPCtrl
    });

    this.typeMCtrl = this.formBuilder.control('', Validators.required);
    this.searchMCtrl = this.formBuilder.control('', Validators.required);
    // this.limitMCtrl = this.formBuilder.control(0);

    this.musicForm = this.formBuilder.group({
      typeM: this.typeMCtrl,
      searchM: this.searchMCtrl,
      // limitM: this.limitMCtrl
    });

    
    this.playlists = this.srvPlaylist.findAllBy("vues");
    this.musiques = this.srvMusique.findAllByPopularity();

   
  }



  rechercherPlaylist() {
    if (this.isPlaylistFormActive && this.typePCtrl.value != "") {      
      this.playlists = this.srvPlaylist.findByContaining(
        this.typePCtrl.value,
        this.searchPCtrl.value,
        Tag[this.tagPCtrl.value as keyof typeof Tag],
        // this.limitPCtrl.value
      );
    }
  }
  

  rechercherMusic() {
    if (this.isMusicFormActive && this.typeMCtrl.value != "") {
      this.musiques = this.srvMusique.findByContaining(
        this.typeMCtrl.value,
        this.searchMCtrl.value,
        // this.limitMCtrl.value
      );
    }
  }
  
  


}
