import { getLocaleDateTimeFormat, formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
export class PlaylistCommentairesComponent implements OnInit{
  @Input() playlistId!: number;
  contenu: string = "";

  constructor(
    private srvPlaylist: PlaylistService,
    private srcCom: CommentaireService,
    private srvUser: UtilisateurService,
    private srvAuth: AuthenticationService
    ) {}
    
  ngOnInit(): void {
    this.loadCom();
    
  }


  commentaires$ !: Observable<Commentaire[]>;
  utilisateur!: Utilisateur;
  pseudo: string ="Attends 2s"
  commentaire!: Commentaire;
  role: string = this.srvAuth.role;

  

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
}
