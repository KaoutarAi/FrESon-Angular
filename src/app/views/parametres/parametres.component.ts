import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent implements OnInit{
  utilisateur$!: Observable<Utilisateur>;
  nomChecked: boolean = false;
  nom!: string;
  prenomChecked: boolean = false;
  prenom!: string;
  mailChecked: boolean = false;
  email!: string;
  mdpChecked: boolean = false;
  mdp!: string;
  mdpVerif!: string;
  deletingAccount = false;

  

  constructor(private router: Router, private srvUtilisateur: UtilisateurService, private srvAuth: AuthenticationService) {
  }

  ngOnInit(): void {
      this.reload();
  }

  confirmDelete() {
    this.deletingAccount = true;
  }

  cancelDelete() {
    this.deletingAccount = false;
  }

  deleteAccount() {
    this.srvUtilisateur.supp(this.srvAuth.id).subscribe(() => {
      this.srvAuth.token = "";
      this.router.navigate(['/inscription']);
    }, (error) => {
      console.error(error);
    });
    
  }



  editNom(){
    const utilisateur = {
      nom: this.nom
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      this.reload();
    }, (error) => {
      console.error(error);
    });
  }

  editPrenom(){
    const utilisateur = {
      prenom: this.prenom
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      this.reload();
    }, (error) => {
      console.error(error);
    });
  }

  editMail(){
    const utilisateur = {
      email: this.email
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      this.reload();
    }, (error) => {
      console.error(error);
    });
  }

  editMdp(){
    const utilisateur = {
      mdp: this.mdp,
      mdpVerif: this.mdpVerif
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      this.router.navigate(['/connexion']);
    }, (error) => {
      console.error(error);
    });
  }

  reload(){
    this.utilisateur$ = this.srvUtilisateur.findById(this.srvAuth.id);
  }

}
