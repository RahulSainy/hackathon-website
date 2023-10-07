import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  constructor(public dialog: MatDialog) { }


openResultsDialog(): void {
    this.dialog.open(ResultDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '90%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: { Round: 'All' }
    });
  }
}
