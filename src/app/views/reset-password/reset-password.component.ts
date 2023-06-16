import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
  pseudo!: string;
  resetMdpForm!: FormGroup;
  mdpCtrl!: FormControl;
  mdpVerifCtrl!: FormControl;


  constructor(title: Title, private router: Router, private activatedRoute: ActivatedRoute, private srvUtilisateur: UtilisateurService, private formBuilder: FormBuilder) {
    title.setTitle("Changer mot de passe");
  }

  ngOnInit(){
    this.mdpCtrl = this.formBuilder.control('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/)
    ]);
    this.mdpVerifCtrl = this.formBuilder.control('', Validators.required);

    this.resetMdpForm = this.formBuilder.group({
      mdp: this.mdpCtrl,
      mdpVerif: this.mdpVerifCtrl
    });

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pseudo = params.get('pseudo') || '';
    });

  }

  reset() {
    const utilisateur = {
      pseudo: this.pseudo,
      mdp: this.mdpCtrl.value,
      mdpVerif: this.mdpVerifCtrl.value
    }

    this.srvUtilisateur.resetMdp(utilisateur).subscribe(() => {
      this.router.navigate(['/connexion']);
    }, (error) => {
      console.error(error);
      this.router.navigate(['/reset-password']);
    });
  }

}
