import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-mat-dialog-character',
  templateUrl: './mat-dialog-character.component.html',
  styleUrls: ['./mat-dialog-character.component.scss'],
  encapsulation: ViewEncapsulation.None ,
})
export class MatDialogCharacterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MatDialogCharacterComponent>
  ) { }

  ngOnInit(): void {
  }

}
