import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-createcharacter',
  templateUrl: './createcharacter.component.html',
  styleUrls: ['./createcharacter.component.scss']
})
export class CreatecharacterComponent implements OnInit {

  createdCharacter:FormGroup;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.createdCharacter = new FormGroup({
      name: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      height: new FormControl(''),
      birthday: new FormControl(''),
      planet: new FormControl(''),
      film: new FormControl(''),
    });
  }

  createCharacter() {
    this.apiService.createCharacter({ name: 'Sanya', gender: 'man' }).subscribe((data) => {
      console.log(data)
    })
  }
}
