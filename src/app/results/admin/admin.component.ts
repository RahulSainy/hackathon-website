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
  displayedColumns: string[] = ['groupNumber','teamLeader', 'college','problemStatement', 'round1Actions'];
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

  addToRound1(team: any): void {
    const groupNumber = team.groupNumber; // Use the correct property to access the team's groupNumber
    this.resultsService.addToRound1(groupNumber).then(() => {
      // Update the team's property to indicate it is in Round 1
      team.round1 = true;
    }).catch(error => {
      console.error('Error adding to Round 1:', error);
    });
  }
  
  removeFromRound1(team: any): void {
    const teamId = team.$key;
    this.resultsService.removeFromRound1(teamId).then(() => {
      team.round1 = false;
    }).catch(error => {
      console.error('Error removing from Round 1:', error);
    });
  }
}