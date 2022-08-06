import { ICharactersState } from './state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectCharacter = createFeatureSelector<ICharactersState>('characters');

export const selectCharacters = createSelector(
  selectCharacter,
  (state:ICharactersState) => state.characters,
);
