import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ResultsService } from '../results.service';
import { map } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { ResultsComponent } from '../results.component';

@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent {
  displayedColumns: string[] = ['groupNumber', 'teamLeader', 'college', 'problemStatement'];
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
    this.resultService.getAll().subscribe((data: any[]) => {
      // Map the data to match property names with spaces
      const transformedData = data.map(item => ({
        groupNumber: item['Group Number'],
        teamName: item['Team Name'],
        teamLeader: item['Team Leader Name'],
        college: item['Team Leader College Name'],
        problemStatement: item['Problem Statement'],
        round1: item['Round1'], // Add round1 property to filter on
      }));

      // Filter data based on the 'Round' value
      if (this.theme.Round === 'All') {
        this.dataSource.data = transformedData; // Show all participants
      } else if (this.theme.Round === 'Round1') {
        this.dataSource.data = transformedData.filter(item => item.round1 === true); // Show Round 1 participants
      }

      this.dataSource.paginator = this.paginator;
    });
  }


  applyFilter(event: any): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}