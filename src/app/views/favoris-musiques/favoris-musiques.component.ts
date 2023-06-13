import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Musique } from 'src/app/models/musique/musique';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-favoris-musiques',
  templateUrl: './favoris-musiques.component.html',
  styleUrls: ['./favoris-musiques.component.css']
})
export class FavorisMusiquesComponent {

  aboMusiques!: Observable<Musique[]>;
  constructor(private srvUtilisateur: UtilisateurService) { }

  ngOnInit(): void {
    this.aboMusiques = this.srvUtilisateur.findAboMusique();
  }

}
