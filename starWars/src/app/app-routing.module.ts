import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterInfoComponent } from './components/character-info/character-info.component';
import { CharactersComponent } from './pages/characters/characters/characters.component';
import { CreatecharacterComponent } from './pages/createcharacter/createcharacter.component';
import { FilmsComponent } from './pages/films/films/films.component';
import { NotFoundComponentComponent } from './pages/not-found-component/not-found-component.component';
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
    path : 'character/create',
    component : CreatecharacterComponent
  },
  {
    path : 'character/:id',
    component : CharacterInfoComponent
  },
  {
    path : 'films',
    component : FilmsComponent
  },
  {
    path : 'planets',
    component : PlanetsComponent
  },
  { path: '**', component: NotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
