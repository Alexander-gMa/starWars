import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome-page/welcome/welcome.component';
import { CharactersComponent } from './pages/characters/characters/characters.component';
import { FilmsComponent } from './pages/films/films/films.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanetsComponent } from './pages/planets/planets/planets.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
import { CharacterComponent } from './components/character/character.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogCharacterComponent } from './components/mat-dialog-character/mat-dialog-character.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    CharactersComponent,
    FilmsComponent,
    PlanetsComponent,
    NotFoundComponentComponent,
    CharacterComponent,
    MatDialogCharacterComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
