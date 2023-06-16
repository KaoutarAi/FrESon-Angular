import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/app/models/utilisateur/utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  userForm!: FormGroup;
  roleCtrl!: FormControl;
  nomCtrl!: FormControl;
  prenomCtrl!: FormControl;
  pseudoCtrl!: FormControl;
  emailCtrl!: FormControl;
  mdpCtrl!: FormControl;
  mdpVerifCtrl!: FormControl;


  constructor(title: Title, private router: Router, private srvUtilisateur: UtilisateurService, private formBuilder: FormBuilder) {
    title.setTitle("Inscription");
  }

  ngOnInit(){
    this.roleCtrl = this.formBuilder.control('', Validators.required);
    this.nomCtrl = this.formBuilder.control('', Validators.required);
    this.prenomCtrl = this.formBuilder.control('', Validators.required);
    this.pseudoCtrl = this.formBuilder.control('', Validators.required);
    this.emailCtrl = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.mdpCtrl = this.formBuilder.control('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)
    ]);
    this.mdpVerifCtrl = this.formBuilder.control('', Validators.required);

    this.userForm = this.formBuilder.group({
      role: this.roleCtrl,
      nom: this.nomCtrl,
      prenom: this.prenomCtrl,
      pseudo: this.pseudoCtrl,
      email: this.emailCtrl,
      mdp: this.mdpCtrl,
      mdpVerif: this.mdpVerifCtrl
    });
  }


  ajouter() {
    const utilisateur = {
      role: this.roleCtrl.value,
      nom: this.nomCtrl.value,
      prenom: this.prenomCtrl.value,
      pseudo: this.pseudoCtrl.value,
      email: this.emailCtrl.value,
      mdp: this.mdpCtrl.value,
      mdpVerif: this.mdpVerifCtrl.value
    }

    this.srvUtilisateur.add(utilisateur).subscribe(() => {
      this.router.navigate(['/connexion']);
    }, (error) => {
      console.error(error);
      this.router.navigate(['/inscription']);
    });
  }

  seConnecter(){
    this.router.navigate(['/connexion']);
  }

}
