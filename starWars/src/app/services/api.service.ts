import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from "rxjs";
import { ResponseHttp } from "../models/responce.model";

const BASE = 'http://laravelmini.loc/';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private httpClient: HttpClient){}

  getFilms() : Observable<any> {
    return this.httpClient.get<ResponseHttp>(BASE + 'api/films').pipe(
      map((data) => {
        return data.data.items;
      }),
      catchError(async (error) => console.log(error))
    )
  }

}
