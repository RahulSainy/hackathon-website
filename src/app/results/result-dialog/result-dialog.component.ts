import { Component,Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResultsService } from '../results.service';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent{
  Round = 'All';
  displayedColumns: string[] = ['groupNumber', 'teamName', 'teamLeader', 'college'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public theme: any,
    private resultService: ResultsService
  ) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.loadDataFromFirebase();
  }

  loadDataFromFirebase(): void {
    this.resultService.getAll().snapshotChanges().subscribe(data => {
      const transformedData = data.map(item => ({
        groupNumber: item.key, // Use the group number as-is
        teamName: item.payload.val()['Team Leader College Name'],
        teamLeader: item.payload.val()['Team Leader Name'],
        college: item.payload.val()['Team Leader College Name'],
      }));
      this.dataSource.data = transformedData;
      this.dataSource.paginator = this.paginator; // Attach paginator to the data source
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}