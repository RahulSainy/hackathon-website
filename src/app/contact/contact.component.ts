import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  studentContacts: any[] = [
    {
      name: 'Abhay Pratap Singh',
      phone: '86519 97455',

      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?'
    },
    {
      name: 'Awadhesh Choubey',
      phone: '87090 38446',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png'
    },
    {
      name: 'Pratham Chaturvedi',
      phone: '96854 43508',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png'
    },
    {
      name: 'Sahil Kumar Jha',
      phone: '83494 29778',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-5748689-4800732.png'
    },
    {
      name: 'Shivam Kumar',
      phone: '97080 51582',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/student-5796558-4841557.png'
    }
  ];

  facultyContacts: any[] = [
    {
      name: 'Prof. Parul Khatri',
      phone: '79094 88778',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Dr. Shadab Pasha Khan',
      phone: '98933 10510',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof. Goldi',
      phone: '80872 62271',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof. Sarika Khatarkar',
      phone: '96693 69912',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof. Nida ',
      phone: '72240 97480',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof. Sana Khan',
      phone: '97552 52388',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-5748689-4800732.png'
    }
  ];
}
