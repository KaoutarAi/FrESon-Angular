import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { authenticatedGuard } from './guards/authenticated.guard';
import { LoggingComponent } from './views/logging/logging.component';
import { AccesRefuseComponent } from './views/acces-refuse/acces-refuse.component';
import { authorizedAdminGuard } from './guards/authorized-admin.guard';
import { PlusVuesComponent } from './views/plus-vues/plus-vues.component';
import { PlusRecentesComponent } from './views/plus-recentes/plus-recentes.component';
import { PlaylistComponent } from './views/playlist/playlist.component';
import { AjouterPlaylistComponent } from './views/ajouter-playlist/ajouter-playlist.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { FavorisComponent } from './views/favoris/favoris.component';
import { FavorisPlaylistsComponent } from './views/favoris-playlists/favoris-playlists.component';
import { FavorisMusiquesComponent } from './views/favoris-musiques/favoris-musiques.component';
import { MesPlaylistsComponent } from './views/mes-playlists/mes-playlists.component';

const routes: Routes = [
    {
        path: 'accueil',
        component: HomeComponent
    },

    {
        path: 'playlist/plus-vues',
        component: PlusVuesComponent
    },
    {
        path: 'playlist/plus-recentes',
        component: PlusRecentesComponent
    },
    {
        path: 'playlist/:id',
        component: PlaylistComponent
    },

    {
        path: 'ajouter-playlist',
        component: AjouterPlaylistComponent
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
        path: 'reset-password',
        component: ResetPasswordComponent
    },

    {
        path: 'favoris',
        component: FavorisComponent
    },

    {
        path: 'favoris/playlists',
        component: FavorisPlaylistsComponent
    },

    {
        path: 'favoris/musiques',
        component: FavorisMusiquesComponent
    },

    {
        path: 'mes-playlists',
        component: MesPlaylistsComponent
    },


    {
        path: 'logging',
        component: LoggingComponent,
        canActivate: [authorizedAdminGuard]
    },
    {
        path: 'denied',
        component: AccesRefuseComponent
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
