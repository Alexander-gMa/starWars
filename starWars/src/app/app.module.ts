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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { StoreModule } from '@ngrx/store';
import * as fromCharacters from './redux/reducers/character.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './redux/effects/character.effect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    CharacterInfoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(
      {
        characters: fromCharacters.characterReducer,
      },
    ),
    EffectsModule.forRoot([
      CharacterEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
