import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.scss']
})
export class CharacterInfoComponent implements OnInit {

  viewValue: boolean = true;

  constructor( ) { }

  ngOnInit(): void {
  }

  switchView() {
    this.viewValue === true ? this.viewValue = false : this.viewValue = true;
    console.log(this.viewValue);
  }
}
