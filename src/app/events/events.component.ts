import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  
})
export class EventsComponent {
  events!: any[];

  constructor() { }

  ngOnInit(): void {
  this.events = [
    {
      Name: 'Day-1 (Round 1)',
      Summary: 'Problem Statement distribution. (Problem Statement will be provided)',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-1 (Round 1)',
      Summary: 'PPT presentation by the Teams on the basis of selected problem statement.',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-1 (Round 1)',
      Summary: 'Out of which 20 finalist teams will be chosen. (Names will be announced in Round 2)',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Round 2',
      Summary: '20 Finalists’ name announcement.',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Round 2',
      Summary: 'On Spot Work Flow Creation & Submission by the selected teams.',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-2 (Final Round)',
      Summary: 'Event Length - 8 hours',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-2 (Final Round)',
      Summary: 'Mentor - 01 mentor will be allowed (Faculty member)',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-2 (Final Round)',
      Summary: 'Rounds - 02',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-2 (Final Round)',
      Summary: 'Round 1 will be of two hours (Basic module)',
      Duration: '',
      Offers: []
    },
    {
      Name: 'Day-2 (Final Round)',
      Summary: 'Round 2 candidates scrutinized in round one will be participating here, and it will be of six hours (Problem Statement)',
      Duration: '',
      Offers: []
    },
    {
      Name: 'On the basis of round 2 performances, the winners will be decided',
      Summary: '',
      Duration: '',
      Offers: []
    }
  ];
}
}