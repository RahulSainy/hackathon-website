import { Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  events = [
    { time: '09:00 AM', title: 'Opening Ceremony', description: 'Welcome and introduction to the event' },
    { time: '10:00 AM', title: 'Round 1', description: 'Problem Statement distribution' },
    { time: '11:00 AM', title: 'Round 1', description: 'PPT presentation by the Teams' },
    { time: '01:00 PM', title: 'Lunch', description: 'Lunch is to be taken on the competition table only' },
    { time: '02:00 PM', title: 'Round 1', description: '20 finalist teams will be chosen' },
    { time: '03:00 PM', title: 'Round 2', description: 'Finalists’ name announcement' },
    { time: '04:00 PM', title: 'Round 2', description: 'On Spot Work Flow Creation & Submission' },
    { time: '06:00 PM', title: 'Day 2', description: 'Event Length - 8 hours' },
    { time: '07:00 PM', title: 'Day 2', description: 'Mentor - 01 mentor will be allowed' },
    { time: '08:00 PM', title: 'Day 2', description: 'Rounds - 02' },
    { time: '10:00 PM', title: 'Day 2', description: 'Round 1 will be of two hours (Basic module)' },
    { time: '12:00 AM', title: 'Day 2', description: 'Round 2 candidates scrutinized in round one' },
    { time: '02:00 AM', title: 'Day 2', description: 'Winners announcement based on round 2 performances' }
  ];

}
