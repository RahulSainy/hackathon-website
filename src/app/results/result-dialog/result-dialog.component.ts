import { Component,Inject, ViewChild } from '@angular/core';
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
export class ResultDialogComponent{
  Round = 'All';
  displayedColumns: string[] = ['groupNumber','teamLeader', 'college','problemStatement'];
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
        groupNumber: item['Group Number'], // Access properties with spaces using bracket notation
        teamName: item['Team Name'],
        teamLeader: item['Team Leader Name'],
        college: item['Team Leader College Name'],
        problemStatement: item['Problem Statement'],
      }));
  
      this.dataSource.data = transformedData;
      this.dataSource.paginator = this.paginator; // Attach paginator to the data source
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