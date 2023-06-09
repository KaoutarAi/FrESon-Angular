import { getLocaleDateTimeFormat, formatDate } from '@angular/common';
import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Commentaire } from 'src/app/models/utilisateur/commentaire';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PlaylistService } from 'src/app/services/musique/playlist.service';
import { CommentaireService } from 'src/app/services/utilisateur/commentaire.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'playlist-commentaires',
  templateUrl: './playlist-commentaires.component.html',
  styleUrls: ['./playlist-commentaires.component.css']
})
export class PlaylistCommentairesComponent implements OnInit, AfterContentChecked{
  @Input() playlistId!: number;
  contenu: string = "";
  @ViewChild('scroller') private myScrollContainer!: ElementRef;

  constructor(
    private srvPlaylist: PlaylistService,
    private srcCom: CommentaireService,
    private srvUser: UtilisateurService,
    private srvAuth: AuthenticationService,
    private cdref: ChangeDetectorRef
    ) {}

    ngAfterContentChecked(): void {
       this.cdref.detectChanges();
    }



  ngOnInit(): void {
    this.loadCom();
  }



  commentaires$ !: Observable<Commentaire[]>;
  utilisateur!: Utilisateur;
  pseudo: string ="Attends 2s"
  commentaire!: Commentaire;
  role: string = this.srvAuth.role;
  findContent!: string;
  findDate!: string;
  year!: string;
  month!: string;
  day!: string;
  findPseudo!: string;

  public loadCom(){
    this.commentaires$ = this.srcCom.findAllByPlaylist(this.playlistId);

  }

  public onEnvoyer(){
    const commentaire = {contenu : this.contenu};
    return this.srcCom.add(commentaire, this.playlistId).subscribe(()=> {
        this.loadCom();
        this.contenu = ""
    });
  }

  public onDelete(commentaire: Commentaire){
    return this.srcCom.delete(commentaire).subscribe(() => {
      this.loadCom();
    })
  }

  public onLoadPseudo(){
    if(this.findPseudo == "" || this.findPseudo == null){
        console.log("HERE OR..");
      this.loadCom();
    }
    else{
        console.log("IN ELSE WE TRUST");
      this.commentaires$ = this.srcCom.findAllByPlaylistAndPseudo(this.playlistId, this.findPseudo);
    }
  }

  public onLoadContent(){
    if(this.findContent== "" || this.findContent == null){
        // console.log("HERE OR..");

      this.loadCom();
    }
    else{
        this.commentaires$ = this.srcCom.findAllByPlaylistAndContenu(this.playlistId, this.findContent);
        // console.log("IN ELSE WE TRUST");

    }
  }

  public onLoadDate(){
    this.year = this.findDate.slice(0, 4);
    this.month = this.findDate.slice(5, 7);
    this.day = this.findDate.slice(8, 10);
    try {
      this.commentaires$ = this.srcCom.findAllByPlaylistAndDateOnly(this.playlistId, this.year, this.month, this.day);
    } catch (error) {
      this.loadCom();
    }

  }


  prettyDate(impDate: Date | null) {
    if (impDate != null) {
        const date = new Date(impDate);
        let day: string = (date.getDay() < 10) ? `0${date.getDay()}` : `${date.getDay()}`;
        let month: string = (date.getMonth() < 10) ? `0${date.getMonth()}` : `${date.getMonth()}`;
        return `${day}/${month}/${date.getFullYear()} à ${date.toTimeString().substring(0, 5)}`;
    }
    return '';

  }

}
