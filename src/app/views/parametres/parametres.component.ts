import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrls: ['./parametres.component.css']
})
export class ParametresComponent {
  nomChecked: boolean = false;
  nom!: string;
  prenomChecked: boolean = false;
  prenom!: string;
  mailChecked: boolean = false;
  email!: string;
  mdpChecked: boolean = false;
  mdp!: string;
  mdpVerif!: string;

  constructor(private router: Router, private srvUtilisateur: UtilisateurService) {
  }



  editNom(){
    const utilisateur = {
      nom: this.nom
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      
    }, (error) => {
      console.error(error);
    });
  }

  editPrenom(){
    const utilisateur = {
      prenom: this.prenom
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      
    }, (error) => {
      console.error(error);
    });
  }

  editMail(){
    const utilisateur = {
      email: this.email
    }
    this.srvUtilisateur.edit(utilisateur).subscribe(() => {
      
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

}
