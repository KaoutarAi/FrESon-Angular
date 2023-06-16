import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  erreur: boolean = false;
  loginForm!: FormGroup;
  pseudoCtrl!: FormControl;
  mdpCtrl!: FormControl;

  constructor(title: Title, private router: Router, private srvAuth: AuthenticationService, private formBuilder: FormBuilder) {
    title.setTitle("Connexion");
  }

  ngOnInit(): void {
    this.pseudoCtrl = this.formBuilder.control('', Validators.required);
    this.mdpCtrl = this.formBuilder.control('', Validators.required);

    this.loginForm = this.formBuilder.group({
      pseudo: this.pseudoCtrl,
      mdp: this.mdpCtrl
    });
  }

  login() {
    this.erreur = false;

    this.srvAuth.login(this.pseudoCtrl.value, this.mdpCtrl.value, {
      next: () => {
        this.router.navigate([ '/accueil' ]).then(() => {window.location.reload()});
      },

      error: () => {
        this.erreur = true;
      }
    });

  }

  inscrire(){
    this.router.navigate(['/inscription']);
  }

}
