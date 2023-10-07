import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../results/result-dialog/result-dialog.component';
declare var gtag:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  data = "Round1"
  constructor(public dialog: MatDialog){}
  registrationEnded: boolean = false;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  lastDate = new Date(2023, 8, 26)
  ngOnInit() {
    // Target date: 25th September (Month is 0-based, so 8 means September)
    const targetDate = new Date(2023, 8, 26).getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;
      if (timeRemaining <= 0) {
        // Registration has ended
        this.registrationEnded = true;
      } else {
        this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      }
    }, 1000);
  }

     
  trackMe() {
    gtag('event', 'APPLY_BUTTON_CLICKED', {
    'event_category': 'BUTTON_CLICK',
    'event_label': 'Apply Me Click',
    'value': true })
    }
  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  openResultsDialogRound1(): void {
    this.dialog.open(ResultDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      panelClass: 'full-screen-modal',
      data: { Round: 'Round1' }
    });
  }
}
