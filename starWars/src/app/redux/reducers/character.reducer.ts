/* eslint-disable ngrx/on-function-explicit-return-type */
import { Action, createReducer, on } from '@ngrx/store';
import * as CharacterAction from '../actions/character.action';
import { ICharactersState } from '../selectors/state.model';

export const initialBoardState:ICharactersState = {
  characters: null,
  currentCharacter: null,
};

export const reducer = createReducer(
  initialBoardState,

  on(CharacterAction.getAllCharactersSuccess, (state, { characters }) => {
    return ({
      ...state,
      characters: characters,
    });
  }),
  on(CharacterAction.getCharacterByIdSuccess, (state, { currentCharacter }) => {
    return ({
      ...state,
      currentCharacter: currentCharacter,
    });
  }),
);

export function characterReducer(state: ICharactersState | undefined, action: Action) {
  return reducer(state, action);
}

