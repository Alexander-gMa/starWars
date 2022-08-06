import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';
import { selectCharacters } from 'src/app/redux/selectors/character.selector';
import { ApiService } from 'src/app/services/api.service';
import * as CharacterActions from '../../../redux/actions/character.action';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {



  characters: Character[] | null;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(CharacterActions.getAllCharacters())
    this.store.select(selectCharacters).subscribe((data) => this.characters = data);
  }

  switchPage() {
    this.router.navigateByUrl(`character/create`);
  }

}
