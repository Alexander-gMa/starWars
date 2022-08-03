import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters/characters.component';
import { FilmsComponent } from './pages/films/films/films.component';
import { PlanetsComponent } from './pages/planets/planets/planets.component';
import { WelcomeComponent } from './pages/welcome-page/welcome/welcome.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full' ,
  },

  {
    path : 'welcome',
    component : WelcomeComponent
  },

  {
    path : 'characters',
    component : CharactersComponent
  },
  {
    path : 'films',
    component : FilmsComponent
  },
  {
    path : 'planets',
    component : PlanetsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
