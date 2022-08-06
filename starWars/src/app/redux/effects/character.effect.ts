import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import * as CharacterAction from '../actions/character.action';
import { ApiService } from 'src/app/services/api.service';

@Injectable()
export class CharacterEffects {

  constructor(
    private actions$: Actions,
    private apiService: ApiService,
  ) {}
  getAllBoards$ = createEffect(
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
}
