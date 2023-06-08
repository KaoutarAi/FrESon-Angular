import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { authenticatedGuard } from './guards/authenticated.guard';
import { LoggingComponent } from './views/logging/logging.component';
import { AccesRefuseComponent } from './views/acces-refuse/acces-refuse.component';
import { authorizedAdminGuard } from './guards/authorized-admin.guard';

const routes: Routes = [
    {
        path: 'accueil',
        component: HomeComponent
    },

    {
        path: 'connexion',
        component: LoginComponent
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
