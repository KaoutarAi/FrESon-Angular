import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationInterceptor } from './interceptors/authentication.interceptor';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { PlaylistHomeComponent } from './components/musique/playlist-home/playlist-home.component';
import { SidebarComponent } from './components/navigation/sidebar/sidebar.component';
import { PlaylistCardComponent } from './components/musique/playlist-card/playlist-card.component';
import { PlaylistCardsComponent } from './components/musique/playlist-cards/playlist-cards.component';
import { PlusVuesComponent } from './views/plus-vues/plus-vues.component';
import { PlaylistGridComponent } from './components/musique/playlist-grid/playlist-grid.component';
import { PlusRecentesComponent } from './views/plus-recentes/plus-recentes.component';
import { PlaylistComponent } from './views/playlist/playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    NavbarComponent,
    PlaylistHomeComponent,
    SidebarComponent,
    PlaylistCardComponent,
    PlaylistCardsComponent,
    PlusVuesComponent,
    PlaylistGridComponent,
    PlusRecentesComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
        {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthenticationInterceptor,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
