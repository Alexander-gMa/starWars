import { Character } from "src/app/models/character.model";

export interface ICharactersState {
  characters: Character[] | null;
  currentCharacter: Character | null;
}
