import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { LoggingComponent } from './views/logging/logging.component';
import { AccesRefuseComponent } from './views/acces-refuse/acces-refuse.component';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { PlaylistHomeComponent } from './components/musique/playlist-home/playlist-home.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { PlaylistCardComponent } from './components/musique/playlist-card/playlist-card.component';
import { PlaylistCardsComponent } from './components/musique/playlist-cards/playlist-cards.component';
import { PlusVuesComponent } from './views/plus-vues/plus-vues.component';
import { PlaylistGridComponent } from './components/musique/playlist-grid/playlist-grid.component';
import { PlusRecentesComponent } from './views/plus-recentes/plus-recentes.component';
import { PlaylistComponent } from './views/playlist/playlist.component';
import { AjouterPlaylistComponent } from './views/ajouter-playlist/ajouter-playlist.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { FavorisComponent } from './views/favoris/favoris.component';
import { MusicCardComponent } from './components/musique/music-card-add/music-card.component';
import { ResetPasswordComponent } from './views/reset-password/reset-password.component';
import { PlaylistButtonsComponent } from './components/musique/playlist-buttons/playlist-buttons.component';
import { PlaylistHeaderComponent } from './components/musique/playlist-header/playlist-header.component';
import { PlaylistMusicListComponent } from './components/musique/playlist-music-list/playlist-music-list.component';
import { LoggedNavbarComponent } from './components/navigation/logged-navbar/logged-navbar.component';
import { RechercherComponent } from './views/rechercher/rechercher.component';
import { FavorisPlaylistsComponent } from './views/favoris-playlists/favoris-playlists.component';
import { FavorisMusiquesComponent } from './views/favoris-musiques/favoris-musiques.component';
import { MusiqueGridComponent } from './components/musique/musique-grid/musique-grid.component';
import { MusiqueCardComponent } from './components/musique/musique-card/musique-card.component';
import { MusiqueCardsComponent } from './components/musique/musique-cards/musique-cards.component';
import { MusicsTableComponent } from './components/musique/musics-table/musics-table.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MesPlaylistsComponent } from './views/mes-playlists/mes-playlists.component';
import { PlaylistCommentairesComponent } from './components/musique/playlist-commentaires/playlist-commentaires.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoggingComponent,
    AccesRefuseComponent,
    LoginComponent,
    NavbarComponent,
    PlaylistHomeComponent,
    SidebarComponent,
    PlaylistCardComponent,
    PlaylistCardsComponent,
    PlusVuesComponent,
    PlaylistGridComponent,
    PlusRecentesComponent,
    PlaylistComponent,
    AjouterPlaylistComponent,
    InscriptionComponent,
    FavorisComponent,
    MusicCardComponent,
    ResetPasswordComponent,
    PlaylistButtonsComponent,
    PlaylistHeaderComponent,
    PlaylistMusicListComponent,
    LoggedNavbarComponent,
    RechercherComponent,
    FavorisPlaylistsComponent,
    FavorisMusiquesComponent,
    MusiqueCardComponent,
    MusiqueCardsComponent,
    MusiqueGridComponent,
    MusicsTableComponent,
    MusiqueGridComponent,
    MesPlaylistsComponent,
    PlaylistCommentairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    DragDropModule
  ],
  providers: [
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true
      },
      Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
