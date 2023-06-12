import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { authenticatedGuard } from './guards/authenticated.guard';
import { InscriptionComponent } from './views/inscription/inscription.component';

const routes: Routes = [
    {
        path: 'accueil',
        component: HomeComponent
    },

    {
        path: 'inscription',
        component: InscriptionComponent
    },

    {
        path: 'connexion',
        component: LoginComponent
    },

    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },

    {
        path: '**',
        component: PageNotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
