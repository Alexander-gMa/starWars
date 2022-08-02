import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome-page/welcome/welcome.component';
import { CharactersComponent } from './pages/characters/characters/characters.component';
import { FilmsComponent } from './pages/films/films/films.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    CharactersComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
