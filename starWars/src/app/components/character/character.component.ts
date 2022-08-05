import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Character } from 'src/app/models/character.model';
import { MatDialogCharacterComponent } from '../mat-dialog-character/mat-dialog-character.component';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() character: Character;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log(this.character)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MatDialogCharacterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
