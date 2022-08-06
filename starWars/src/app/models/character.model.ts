import { Film } from "./film.model";
import { Planet } from "./planet.model";

export interface Character {
  id?: string | number;
  name?: string;
  height? : string;
  birthday?: string;
  gender?: string;

  film?: Film;
  planet?: Planet;
}
