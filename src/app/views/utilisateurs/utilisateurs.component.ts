import { Component } from '@angular/core';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent {
  utilisateurs$!: Observable<Utilisateur[]>;
  pseudo!: string;

  constructor(private srvUtilisateur: UtilisateurService) {
  }
  
  ngOnInit(): void {
    this.reload();
  }

  supprimer(user: Utilisateur) {
    this.srvUtilisateur
      .delete(user)
      .subscribe(() => this.reload());
  }

  reload() {
    this.utilisateurs$ = this.srvUtilisateur.findAllByRoles();
  }

  rechercherPseudo(){
    this.utilisateurs$ = this.utilisateurs$.pipe(
      map((users: Utilisateur[]) => users.filter(user => user.pseudo === this.pseudo))
    );
  }

}
