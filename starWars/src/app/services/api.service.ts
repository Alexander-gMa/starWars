import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from "rxjs";
import { ResponseHttp } from "../models/responce.model";
import { Film } from "../models/film.model";
import { Planet } from "../models/planet.model";
import { Character } from "../models/character.model";

const BASE = 'http://laravelmini.loc/';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.httpClient.get<ResponseHttp>(BASE + 'api/films').pipe(
      map((data) => (
        data.data.items
      ),
        catchError(async (error) => console.log(error)))
    )
  }

  getPlanets(): Observable<Planet[]> {
    return this.httpClient.get<ResponseHttp>(BASE + 'api/planets').pipe(
      map((data) => (
        data.data.items
      ),
        catchError(async (error) => console.log(error)))
    )
  }

  getCharacter(character: Character): Observable<Character> {
    return this.httpClient.get<ResponseHttp>(BASE + 'api/characters/' + character.id).pipe(
      map((data) => (
        data.data.item
      ),
        catchError(async (error) => console.log(error)))
    )
  }

  createCharacter(character: Character): Observable<Character> {
    return this.httpClient.post<ResponseHttp>(BASE + 'api/characters', character).pipe(
      map((data) => (
        data.data.item
      ),
        catchError(async (error) => console.log(error)))
    )
  }

  updateCharacter(character: Character): Observable<Character> {
    return this.httpClient.put<ResponseHttp>(BASE + 'api/characters/' + character.id, character).pipe(
      map((data) => (
        data.data.item
      ),
        catchError(async (error) => console.log(error)))
    )
  }

}
