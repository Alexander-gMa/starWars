import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor(
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    console.log(this.character)
  }

  switchPage() {
    this.router.navigateByUrl(`character/${this.character.id}`);
  }
}
