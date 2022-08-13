import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, pluck } from 'rxjs';
import * as CharacterAction from '../actions/character.action';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class CharacterEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}

  createCharacter$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CharacterAction.createCharacter),
        mergeMap((data) => {
          return this.apiService.createCharacter(data.currentCharacter);
        },
        ),
        map((currentCharacter) => {
          return CharacterAction.createCharacterSuccess({ currentCharacter });
        }),
      );
    },
  );

  getAllCharacters$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CharacterAction.getAllCharacters),
        mergeMap(() => {
          return this.apiService.getCharacters();
        },
        ),
        map((characters) => {
          return CharacterAction.getAllCharactersSuccess({ characters });
        }),
      );
    },
  );

  getCharacterById$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CharacterAction.getCharacterById),
        map(data => data.info),
        mergeMap((info) => {
          return this.apiService.getCharacter(info);
        }),
        map((currentCharacter) => {
          return CharacterAction.getCharacterByIdSuccess({ currentCharacter });
        }),
      );
    },
  );

  updateCharacter$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CharacterAction.updateCharacter),
        mergeMap((data) => {
          return this.apiService.updateCharacter(data.currentCharacter);
        }),
        map((currentCharacter) => {
          return CharacterAction.updateCharacterSuccess({ currentCharacter });
        }),
      );
    },
  );
}
