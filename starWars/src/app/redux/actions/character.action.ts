import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/models/character.model';

const actionsSource = '[CHARACTER]';

export const getAllCharacters = createAction(
  `${actionsSource} GET ALL CHARACTER`,
);
export const getAllCharactersSuccess = createAction(
  `${actionsSource} GET ALL CHARACTER SUCCESS`,
  props<{ characters: Character[] }>(),
);
