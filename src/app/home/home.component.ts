import { Component, OnInit } from '@angular/core';
declare var gtag:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  lastDate = new Date(2023, 9, 16)
  ngOnInit() {
    // Target date: 25th September (Month is 0-based, so 8 means September)
    const targetDate = new Date(2023, 8, 15).getTime();

    setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      this.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
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
}
