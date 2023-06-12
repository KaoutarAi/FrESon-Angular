import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
export class AjouterPlaylistComponent implements OnInit, AfterViewChecked, OnDestroy{
    playlist!: Playlist; // when editing
    musiques$!: Observable<Musique[]>;
    playlistForm!: FormGroup;
    nomCtrl!: FormControl;
    publicCtrl!: FormControl;
    musiquesSelected: Musique[] = new Array<Musique>;
    editing: number = 0;
    tagCtrl!: FormControl;
    etiquettes: string[] = Object.values(Tag) ;
    subscriptionPlaylist!: Subscription;

    @Output() ok: EventEmitter<void> = new EventEmitter<void>();
    @Output() cancel: EventEmitter<void> = new EventEmitter<void>();



    constructor(
        private activatedRoute: ActivatedRoute,
        private srvAuth: AuthenticationService,
        private srvPlaylist: PlaylistService,
        private srvMusic: MusiqueService,
        private formBuilder: FormBuilder,
        ) { }
    ngOnDestroy(): void {
        this.subscriptionPlaylist.unsubscribe();
    }

    ngAfterViewChecked(): void { // Used to fetch the paramters subscribed in onInit
        console.log("ONCHANGES: ")
        console.log(this.musiquesSelected);
    }



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
            this.subscriptionPlaylist = this.srvPlaylist.findById(this.editing).subscribe(p => {
                this.playlist = p;
                this.musiquesSelected = this.playlist.musiques;

                // this.selectMusique = ;
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
        console.log( "FINAL INIT: " + this.musiquesSelected);

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

    // selectMusique(selected: number, musique: Musique) {
    //     if (!selected) {
    //         this.musiquesSelected.push(musique);
    //     }
    //     else {
    //         const idx = this.musiquesSelected.indexOf(musique);
    //         this.musiquesSelected.splice(idx, 1);
    //     }
    //     console.log(this.musiquesSelected);

    // }

    fetchMusique(obsMusiques: Observable<Musique[]>): Musique[] {
        let musiques: Musique[] = new Array<Musique>();
        obsMusiques.subscribe((ms) => {
            ms.forEach(m => {
                musiques.push(m);
            })
        })
        return musiques;
    }

    selectMusique(emitted: any[]) {
        console.log("EMITTED");
        console.log(emitted);


        if (emitted[0]) {
            this.musiquesSelected.push(emitted[1]);
        }
        else {
            const idx = this.musiquesSelected.indexOf(emitted[1]);
            this.musiquesSelected.splice(idx, 1);
        }
        console.log(this.musiquesSelected);

    }
}
