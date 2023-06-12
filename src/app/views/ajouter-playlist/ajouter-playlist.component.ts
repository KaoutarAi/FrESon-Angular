import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Playlist } from 'src/app/models/musique/playlist';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'ajouter-playlist',
  templateUrl: './ajouter-playlist.component.html',
  styleUrls: ['./ajouter-playlist.component.css']
})
export class AjouterPlaylistComponent implements OnInit{
    id: number = 0;
    playlist?: Playlist; // when editing
    playlistForm!: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private srvPlaylist: PlaylistService,
        private formBuilder: FormBuilder
        ) {}

    ngOnInit(): void {
        // We first need to determine if the user wants to edit or add a playlist
        // (id stays at 0 for adding, id is replaced when editing via queryParams TODO: ADD USER CHECK!)
        this.activatedRoute.queryParams.subscribe(params => {
            if (params["id"]) {
            this.id = params["id"];
            }
        });
        if (this.id != 0) {
        this.srvPlaylist.findById(this.id).subscribe(p => {
            this.playlist = p;
        })
    };
    }


}
