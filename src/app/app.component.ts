import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!: string;
  email!: string;
  comments!: string;

  isNavbarOpen = false; // Add this variable to manage the navbar state
  closeNavbar(): void {
    this.isNavbarOpen = false;
  }

  // Function to toggle the navbar open/close state
  toggleNavbar(): void {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Function to handle form submission
  onSubmit(): void {
    // You can add form submission logic here
    console.log('Form submitted!');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Comments:', this.comments);
  }
}
