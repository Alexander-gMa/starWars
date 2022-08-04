import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  abc() {
    this.apiService.createCharacter({ name: 'Sanya', gender: 'man' }).subscribe((data) => {
      console.log(data)
    })
  }

  getCharacter() {
    this.apiService.getCharacter({ id: 8 }).subscribe((data) => {
      console.log(data)
    })
  }

}
