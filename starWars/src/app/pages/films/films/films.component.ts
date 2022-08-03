import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: Film[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getFilms()
  }

  getFilms() {
    this.apiService.getFilms().subscribe((data) => {
      this.films = data;
    })
  }

  abc(){
    console.log(this.films)
  }

}
