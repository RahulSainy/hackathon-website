import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
const ELEMENT_DATA = [
  {groupNumber: 1, teamName: 'Hydrogen', teamLeader: 1.0079, college: 'Hsafasfjkhsjksdfu'},
  {groupNumber: 2, teamName: 'Helium', teamLeader: 4.0026, college: 'Hesafasfjkhsjksdfu'},
  {groupNumber: 3, teamName: 'Lithium', teamLeader: 6.941, college: 'Lisafasfjkhsjksdfu'},
  {groupNumber: 4, teamName: 'Beryllium', teamLeader: 9.0122, college: 'Besafasfjkhsjksdfu'},
  {groupNumber: 5, teamName: 'Boron', teamLeader: 10.811, college: 'Bsafasfjkhsjksdfu'},
  {groupNumber: 6, teamName: 'Carbon', teamLeader: 12.0107, college: 'Csafasfjkhsjksdfu'},
  {groupNumber: 7, teamName: 'Nitrogen', teamLeader: 14.0067, college: 'Nsafasfjkhsjksdfu'},
  {groupNumber: 8, teamName: 'Oxygen', teamLeader: 15.9994, college: 'Osafasfjkhsjksdfu'},
  {groupNumber: 9, teamName: 'Fluorine', teamLeader: 18.9984, college: 'Fsafasfjkhsjksdfu'},
  {groupNumber: 10, teamName: 'Neon', teamLeader: 20.1797, college: 'Nesafasfjkhsjksdfu'},
];
@Component({
  selector: 'app-result-dialog',
  templateUrl: './result-dialog.component.html',
  styleUrls: ['./result-dialog.component.css']
})
export class ResultDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public theme: any
  ) {}

  Round = 'Round 1'
 displayedColumns: string[] = ['groupNumber', 'teamName', 'teamLeader', 'college',];
 dataSource = [...ELEMENT_DATA];
  onClose(): void {
    this.dialogRef.close();
  }
}
