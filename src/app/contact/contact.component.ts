import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  studentContacts1: any[] = [
    {
      name: 'Awadhesh Choubey',
      phone: '87090 38446',
      img: 'https://i.ibb.co/bLxVqww/Awadhesh-Choubey-removebg-preview.png'
    },

    {
      name: 'Sahil Kumar Jha',
      phone: '83494 29778',
      img: 'https://i.ibb.co/8XHfrm1/sahil-removebg-preview.png'
    },
    {
      name: 'Ganesh Mishra ',
      phone: '97543 63045',

      img: 'https://i.ibb.co/yg83JXX/Ganesh-Mishra.png'
    },

  ]
  StudentGirls: any[] = [
    {
      name: 'Kratika Tiwari',
      phone: '88170 06385',

      img: 'https://i.ibb.co/xf1xmVv/Kratika-Tiwari.png'
    },
    {
      name: 'Tanishka Chauhan',
      phone: '91795 82921',

      img: 'https://i.ibb.co/bvGG6FK/Tanishka-Chauhan.png'
    },
    {
      name: 'Shraddha Sharma',
      phone: '62669 56656',

      img: 'https://i.ibb.co/F8kK7pp/Shraddha-Sharma.png'
    },
    {
      name: 'Nancy Saini',
      phone: '',

      img: 'https://i.ibb.co/bXjyXHh/Nancy-Saini.png'
    },
    {
      name: 'Reecha Daharwal',
      phone: '',

      img: 'https://i.ibb.co/xC9b1sS/Reecha-Daharwal.png'
    },
    {
      name: 'Aditi Sahu',
      phone: '',

      img: 'https://i.ibb.co/QmL6pF6/Aditi-Sahu.png'
    },
  ]
  studentContacts: any[] = [



    {
      name: 'Shivam Kumar',
      phone: '97080 51582',
      img: 'https://i.ibb.co/b5Vs8xT/shivam-removebg-preview.png'
    },
    {
      name: 'Pratham Chaturvedi',
      phone: '96854 43508',
      img: 'https://i.ibb.co/tYWwk0F/Pratham-Chaturvedi.png'
    },
    {
      name: 'Abhay Pratap Singh',
      phone: '86519 97455',

      img: 'https://i.ibb.co/xCRDzPx/Abhay-Pratap-Singh-removebg-preview.png'
    },


  ];

  facultyContacts: any[] = [
    {
      name: 'Dr. Shadab Pasha Khan',
      phone: '98933 10510',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },


    {
      name: 'Prof Swati Pandey',
      phone: '94253 78757',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-5748689-4800732.png'
    },

    {
      name: 'Prof. Sarika Khatarkar',
      phone: '96693 69912',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof. Parul Khatri',
      phone: '79094 88778',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof Nida Afreen Rizvi',
      phone: '72240 97480',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },
    {
      name: 'Prof Goldi Jarbais',
      phone: '80872 62271',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-student-7215499-5873311.png?f=webp'
    },

    {
      name: 'Prof. Sana Khan',
      phone: '97552 52388',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-5748689-4800732.png'
    },
    {
      name: 'Dr Swati Namdev',
      phone: '97552 52388',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-5748689-4800732.png'
    }, {
      name: 'Prof Neha Tiwari',
      phone: '97552 52388',
      img: 'https://cdn3d.iconscout.com/3d/premium/thumb/male-employee-5748689-4800732.png'
    },
  ];
}
