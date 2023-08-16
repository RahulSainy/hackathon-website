import { Component, Input } from '@angular/core';
import { Theme } from '../theme.interface';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css'],
})
export class ThemeDetailsComponent {
  @Input() theme!: Theme; // Input property to receive the theme data
constructor(){
  
}
}
