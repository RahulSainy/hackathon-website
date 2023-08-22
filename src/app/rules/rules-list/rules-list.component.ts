import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-rules-list',
  templateUrl: './rules-list.component.html',
  styleUrls: ['./rules-list.component.css']
})
export class RulesListComponent {
  constructor(private dialog: MatDialog) {}

  openPopup(fileId: string) {
    console.log(`https://drive.google.com/file/d/${fileId}/view`)
    window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
    // const pdfUrl = this.generatePdfUrl(fileId);
    // this.dialog.open(PopupComponent, {
    //   data: { pdfUrl },
    // });
  }

  generatePdfUrl(fileId: string): string {
    return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  }

}

  // generatePdfUrl(fileId: string): string {
  //   return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  // }

 

