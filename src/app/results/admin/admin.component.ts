import { Component,ViewChild } from '@angular/core';
import { ResultsService } from '../results.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  displayedColumns: string[] = ['groupNumber','teamLeader','problemStatement', 'Round1'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private resultsService: ResultsService) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.loadDataFromFirebase();
  }

  loadDataFromFirebase(): void {
    this.resultsService.getAll().subscribe((data: any[]) => {
      console.log(data)
      const transformedData = data.map(item => ({
        groupNumber: item['Group Number'], // Access properties with spaces using bracket notation
        // teamName: item['Team Name'],
        teamLeader: item['Team Leader Name'],
        college: item['Team Leader College Name'],
        problemStatement: item['Problem Statement'],
        Round1: item['Round1'],
      }));
      this.dataSource.data = transformedData;
      this.dataSource.paginator = this.paginator; // Attach paginator to the data source
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  addToRound1(element: any) {
    const groupNumber = element.groupNumber; // Assuming 'groupNumber' is the unique identifier
    this.resultsService.addToRound1(groupNumber)
      .then(() => {
        element.Round1 = true;
        // Update the dataSource data to reflect the change
        
        // this.dataSource.data = [...this.dataSource.data];
      })
      .catch(error => {
        console.error('Error adding to Round 1:', error);
      });
  }
  
  
  removeFromRound1(element: any) {
    const groupNumber = element.groupNumber; // Assuming 'groupNumber' is the unique identifier
    this.resultsService.removeFromRound1(groupNumber) // Call removeFromRound1 here
      .then(() => {
        element.Round1 = false;
        // Update the dataSource data to reflect the change
        // this.dataSource.data = [...this.dataSource.data];
      })
      .catch(error => {
        console.error('Error removing from Round 1:', error);
      });
  }
}