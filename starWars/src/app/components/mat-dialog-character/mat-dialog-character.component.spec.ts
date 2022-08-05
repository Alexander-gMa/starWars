import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogCharacterComponent } from './mat-dialog-character.component';

describe('MatDialogCharacterComponent', () => {
  let component: MatDialogCharacterComponent;
  let fixture: ComponentFixture<MatDialogCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogCharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
