import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters: Character[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  createCharacter() {
    this.apiService.createCharacter({ name: 'Sanya', gender: 'man' }).subscribe((data) => {
      console.log(data)
    })
  }

  updateCharacter() {
    this.apiService.updateCharacter({ id: 8, name: 'Petya', gender: 'female' }).subscribe((data) => {
      console.log(data)
    })
  }

  getCharacter() {
    this.apiService.getCharacter({ id: 8 }).subscribe((data) => {
      console.log(data)
    })
  }

  getCharacters() {
    this.apiService.getCharacters().subscribe((data) => {
      console.log(data);
      this.characters = data;
    })
  }

}
