import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResultsService } from '../results.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public theme: any,
    private resultService: ResultsService
  ) {}

  Round = 'Round 1';
  displayedColumns: string[] = ['groupNumber', 'teamName', 'teamLeader', 'college'];
  dataSource: any[] = [];

  ngOnInit() {
    this.loadDataFromFirebase();
  }

  loadDataFromFirebase(): void {
    this.resultService.getAll().snapshotChanges().subscribe((data: any) => {
      // Assuming the data structure matches your Firebase data
      this.dataSource = data.map((item: any, index: number) => ({
        groupNumber: item.key, // Use the group number as-is
        teamName: item.payload.val()['Team Leader College Name'],
        teamLeader: item.payload.val()['Team Leader Name'],
        college: item.payload.val()['Team Leader College Name'],
      }));
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}