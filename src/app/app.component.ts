import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Observable } from 'rxjs';
import { Utilisateur } from './models/utilisateur/utilisateur';
import { UtilisateurService } from './services/utilisateur/utilisateur.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(
  //   public srvAuth: AuthenticationService
  // ) { }

  utilisateurs$!: Observable<Utilisateur[]>;
  utilisateurForm?: FormGroup | null;
  pseudoCtrl!: FormControl;
  emailCtrl!: FormControl;
  editing: number = 0;

  constructor(title: Title, private srvUtilisateur: UtilisateurService, private formBuilder: FormBuilder) {
    title.setTitle("Liste des utilisateurs");
  }
  
  ngOnInit(): void {
    this.reload();
  }

  ajouter() {
    this.editing = 0;
    this.pseudoCtrl = this.formBuilder.control('', Validators.required);
    this.emailCtrl = this.formBuilder.control('', Validators.required);

    this.utilisateurForm = this.formBuilder.group({
      pseudo: this.pseudoCtrl,
      email: this.emailCtrl
    });
  }

  modifier(utilisateur: Utilisateur) {
    this.editing = utilisateur.id;
    this.pseudoCtrl = this.formBuilder.control(utilisateur.pseudo, Validators.required);
    this.emailCtrl = this.formBuilder.control(utilisateur.email, Validators.required);

    this.utilisateurForm = this.formBuilder.group({
      pseudo: this.pseudoCtrl,
      email: this.emailCtrl
    });
  }

  ajouterOuModifier() {
    let addOrEditObs: Observable<Utilisateur>;
    const utilisateur = {
      id: this.editing,
      pseudo: this.pseudoCtrl.value,
      email: this.emailCtrl.value
    };

    if (this.editing) {
      addOrEditObs = this.srvUtilisateur.edit(utilisateur);
    }

    else {
      addOrEditObs = this.srvUtilisateur.add(utilisateur);
    }

    addOrEditObs.subscribe(() => this.reload());
    this.stopAjouterOuModifier();
  }

  stopAjouterOuModifier() {
    this.editing = 0;
    this.utilisateurForm = null;
  }

  supprimer(utilisateur: Utilisateur) {
    this.srvUtilisateur
      .delete(utilisateur)
      .subscribe(() => this.reload());
  }

  private reload() {
    this.utilisateurs$ = this.srvUtilisateur.findAll();
  }
}
