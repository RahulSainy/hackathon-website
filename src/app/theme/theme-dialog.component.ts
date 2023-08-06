import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-theme-dialog',
  templateUrl: './theme-dialog.component.html',
  styleUrls: ['./theme-dialog.component.css']
})
export class ThemeDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ThemeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public theme: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
