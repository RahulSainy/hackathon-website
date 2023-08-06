import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemeDialogComponent } from './theme-dialog.component';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  constructor(public dialog: MatDialog) { }
  themes = [
    {
      title: 'Smart Mechanization',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/robot-arm-7865273-6308127.png',
      instructions: 'Ideas focused on the intelligent use of resources for transforming and advancements of technology with combining the artificial intelligence to explore more various sources and get valuable insights.  Smart Mechanization is all about automating tasks using advanced technology and artificial intelligence to improve efficiency and reduce human effort in various industries.'
    },
    {
      title: 'Agronomics',
      imageUrl: 'https://img.freepik.com/premium-vector/isometric-modern-smart-industrial-greenhouse-artificial-intelligence-robots-agricultural-organic-food-agriculture-hydroponic-conccept_589019-2357.jpg',
      instructions: ' Developing solutions, keeping in mind the need to enhance the primary sector of India - Agriculture and to manage and process our agriculture produce.  Agronomics involves the study of agricultural practices and land use to enhance crop production and maximize resource utilization for sustainable and efficient farming.'
    }
    ,
    {
      title: 'Globetrotting',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/010/855/681/original/3d-illustration-travel-around-the-world-by-plane-png.png',
      instructions: 'Submit your ideas to address the growing pressures on the city’s resources,transport networks, and logistic infrastructure. Globetrotting represents the spirit of traveling and exploring different parts of the world, experiencing diverse cultures, and embracing new adventures.'
    }
    ,
    {
      title: 'Health & Games',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/medical-app-3494845-2928737.png',
      instructions: 'Ideas that can boost fitness activities and assist in keeping fit. Health & Games explore the intersection of technology and health, focusing on innovative ways to promote physical and mental well-being through gamification and digital solutions.'
    }
    ,
    {
      title: 'Cyber Safety',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/security-2870307-2386775.png',
      instructions: 'Cyber Security ideas for the safety of Apps, Websites, Servers, Payment Gateways and other means to prevent hackingCyber Safety emphasizes the importance of protecting digital assets and information, understanding potential cyber threats, and implementing security measures to ensure online safety.'
    }
  ];
  openThemeDialog(theme: any): void {
    this.dialog.open(ThemeDialogComponent, {
      width: '400px',
      data: theme
    });
  }
}