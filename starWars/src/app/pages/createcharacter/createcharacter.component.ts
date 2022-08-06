import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCurrentCharacter } from 'src/app/redux/selectors/character.selector';
import * as CharacterActions from '../../redux/actions/character.action';

@Component({
  selector: 'app-createcharacter',
  templateUrl: './createcharacter.component.html',
  styleUrls: ['./createcharacter.component.scss']
})
export class CreatecharacterComponent implements OnInit {

  createdCharacter: FormGroup;

  successTitle: string = '';

  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.createdCharacter = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      height: new FormControl(''),
      birthday: new FormControl(''),
      planet: new FormControl(''),
      film: new FormControl(''),
    });
  }

  createCharacter() {
    const currentCharacter = this.createdCharacter.value;
    this.store.dispatch(CharacterActions.createCharacter({ currentCharacter }));
    this.successTitle = `Character was created!`
  }

  switchPage() {
    this.router.navigateByUrl(`characters`);
  }
}
