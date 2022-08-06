import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';
import * as CharacterActions from '../../redux/actions/character.action';
import { selectCharacterById } from 'src/app/redux/selectors/character.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  viewValue: boolean = true;

  character: Character | null;

  updatedCharacter: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store) { }

  ngOnInit(): void {
    this.getCurrentCharacter();
    this.createForm()
  }

  createForm() {
    this.updatedCharacter = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      height: new FormControl(''),
      birthday: new FormControl(''),
      planet: new FormControl(''),
      film: new FormControl(''),
    });
  }

  getCurrentCharacter() {
    const {
      snapshot: {
        params: { id },
      },
    } = this.route;
    this.store.dispatch(CharacterActions.getCharacterById({ info: { id } }))
    this.store.select(selectCharacterById).subscribe((data) => {
      this.updatedCharacter?.controls['name'].setValue(data?.name);
      this.updatedCharacter?.controls['gender'].setValue(data?.gender);
      this.updatedCharacter?.controls['height'].setValue(data?.height);
      this.updatedCharacter?.controls['birthday'].setValue(data?.birthday);
      this.updatedCharacter?.controls['planet'].setValue(data?.planet);
      this.updatedCharacter?.controls['film'].setValue(data?.film);
      this.character = data
    });
  }

  switchView() {
    this.viewValue === true ? this.viewValue = false : this.viewValue = true;
    console.log(this.viewValue);
  }

  updateCharacter() {
    const updatedCharacter = Object.assign(this.updatedCharacter.value, { id: this.character?.id });
    this.store.dispatch(CharacterActions.updateCharacter({ currentCharacter: updatedCharacter }))
  }
}
