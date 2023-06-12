import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { Playlist } from 'src/app/models/musique/playlist';
import { Tag } from 'src/app/models/musique/tag';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MusiqueService } from 'src/app/services/musique/musique.service';
import { PlaylistService } from 'src/app/services/musique/playlist.service';

@Component({
  selector: 'ajouter-playlist',
  templateUrl: './ajouter-playlist.component.html',
  styleUrls: ['./ajouter-playlist.component.css']
})
export class AjouterPlaylistComponent implements OnInit{
    playlist!: Playlist; // when editing
    musiques$!: Observable<Musique[]>;
    playlistForm!: FormGroup;
    nomCtrl!: FormControl;
    publicCtrl!: FormControl;
    musiquesSelected!: Musique[];
    editing: number = 0;
    tagCtrl!: FormControl;
    etiquettes: string[] = Object.values(Tag) ;

    @Output() ok: EventEmitter<void> = new EventEmitter<void>();
    @Output() cancel: EventEmitter<void> = new EventEmitter<void>();



    constructor(
        private activatedRoute: ActivatedRoute,
        private srvAuth: AuthenticationService,
        private srvPlaylist: PlaylistService,
        private srvMusic: MusiqueService,
        private formBuilder: FormBuilder,
        ) { }

    ngOnInit(): void {
        // We first need to determine if the user wants to edit or add a playlist
        // (id stays at 0 for adding, id is replaced when editing via queryParams TODO: ADD USER CHECK!)
        this.activatedRoute.queryParams.subscribe(params => {
            if (params["id"]) {
                this.editing = params["id"];
                console.log("IIIDDD: " + this.editing);

            }
        });
        if (this.editing) { // editing playlist
            this.srvPlaylist.findById(this.editing).subscribe(p => {
                this.playlist = p;
                this.ajouterOuModiferForm();
                console.log("PRINT VALUE:" + this.tagCtrl.value);

            })

        }
        else {// add a new playlist associated to the current user
            this.playlist = new Playlist();
            this.playlist.utilisateurId = this.srvAuth.id;
            this.ajouterOuModiferForm();
            // console.log("PLAYLIST INFO: " + this.playlist.nom + " " + this.playlist.etiquette);
        }

        // on Init load all musics for selection
        this.musiques$ = this.srvMusic.findAll();
        // console.log("USER ID: " + this.userId);
    }


    ajouterOuModiferForm() {
        this.nomCtrl = this.formBuilder.control(this.playlist.nom, Validators.required);
        this.publicCtrl = this.formBuilder.control(this.playlist.public, Validators.required);
        this.tagCtrl = this.formBuilder.control('JOIE', Validators.required);

        this.playlistForm = this.formBuilder.group({
          nom: this.nomCtrl.value,
          public: this.publicCtrl,
          tag: this.tagCtrl.value
        });
      }

    doOk() {
        this.ok.emit();
      }

      onChange(a: any) {
        console.log("CHANGE RADIO: " + a.value);

      }
}
