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
  teams = []

openResultsDialog(): void {
    this.dialog.open(ResultDialogComponent, {
      width: '600px',
      data: this.teams
    });
  }
}
