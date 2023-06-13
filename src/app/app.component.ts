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

}
