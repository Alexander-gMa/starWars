import { Component, OnInit } from '@angular/core';
import { Planet } from 'src/app/models/planet.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getPlanets()
  }

  getPlanets() {
    this.apiService.getPlanets().subscribe((data) => {
      this.planets = data;
    })
  }

  abc(){
    console.log(this.planets)
  }

}
