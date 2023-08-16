import { Component, Output } from '@angular/core';
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
      problemStatements: [
        {
          title: 'Autonomous AI Robot for Fetching Things',
          objective: 'An autonomous navigation robot with things delivery at home, office or industries',
          description: 'Imagine, you have a million tasks at home, office or industries done by a robot. You are able to focus on your work and spend quality time with yourself, your friends, and your family. You construct a robot that can recognize commands, and autonomously navigate to the end point and perform the necessary actions in home, office or industry.'
        },
        {
          title: 'Self Driving Autonomous Vehicle',
          objective: 'Self driving vehicle algorithm and code using ML/AI computer vision.',
          description: 'One of the most remarkable applications of Machine Learning in today\'s world is the self-driving or autonomous car. Design and Develop code for a Machine Learning based self driving vehicle that will improve and enhance the functions and the performance of autonomous cars.'
        }
      ]
    },
    {
      title: 'Smart Agriculture',
      imageUrl: 'https://img.freepik.com/premium-vector/isometric-modern-smart-industrial-greenhouse-artificial-intelligence-robots-agricultural-organic-food-agriculture-hydroponic-conccept_589019-2357.jpg',
      problemStatements: [
        {
          title: 'Smart Crop, Fertilizer and Disease Predictor System',
          objective: 'Software Tool (Web/Mobile App) to aid farmers to decide crop, fertilizer and diagnose disease in Plants.',
          description: 'The farmer should be able to decide which crop and fertilizer he/she has to grow for the current agriculture season. The fertilizer should be decided on NPK values. Also, the crop should be decided based on environmental conditions. For disease diagnosis he/she should take the image of plant leaves from the camera of mobile or any other gadget and submit it. Rest the AI system should be able to detect the disease and recommend its diagnosis.'
        },
        {
          title: 'Smart Weather Assistance for Agriculture System',
          objective: 'Assisting farmers with the help of data from the meteorological department.',
          description: 'Create Smart Web/Mobile app for Updating and warning the farmers about the weather. So create a solution that can help farmers by keeping them warned about weather conditions which can affect them by accessing data from the meteorological department. Try to keep the product user friendly.'
        }
      ]
    },
    {
      title: 'Smart AI',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/ai-search-8137097-6617487.png',
      problemStatements: [
        {
          title: 'AI base Smart Chatbot',
          objective: 'An interactive AI base Interactive Chatbot for Customer Support',
          description: 'AI based Chatbots have become extremely popular in recent years. Develop a Conversational Chatbots that converse with users with text-based or text-to-speech. Your Chatbot must enhance the user experience by responding to questions like a real person. To create a chatbot, you can use Python language, AI tools, and NLP (Natural Language Processing). Your chatbot should be able to assimilate the characteristics of a real person, such as recognizing and responding to the user\'s communication on a specific topic (You can choose any real world Customer Support Domain).'
        },
        {
          title: 'Smart Assistant For Education System',
          description: 'Alexa, Siri, and Google Assistant are the most popular intelligent personal assistants in the market today. They are Artificial intelligence (AI) and Internet of Things (IoT)-based devices that make simple tasks like online shopping or Google searches easier. Based on popular smart assistants, you can make a smart assistant for your college, schools or coaching and training institute It can be game-changing to have a smart assistant that can handle tedious task of retrieving and recommending assets. Creating a small intelligent assistant that can recognize commands and recommend appropriately amongst the courses, projects, tutorials for students.'
        }
      ]
    },
    {
      title: 'Smart IOT',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/internet-of-things-7865256-6308110.png',
      problemStatements: [
        {
          title: 'Smart traffic monitoring and light System using IOT and AI',
          objective: 'A complete Electronic, AI Computer Vision based Hardware and Software system to smartly control a 4 way crossing traffic light based on traffic density and catch vehicles breaking traffic rules.',
          description: 'At present, a lot of vehicles do not follow traffic rules or we are stuck in high density traffic for hours. Develop a smart system, if someone is breaching in absence of traffic police, your system must detect the person doing this traffic rule breach. Also when traffic density is high on a lane then traffic light must be smartly controlled to manage the high density traffic.'
        },
        {
          title: 'Smart IOT based Parking System',
          objective: 'Develop an IoT enabled Mobile application to give real time parking space available on the campus.',
          description: 'In the present scenario of high ratio of students and staff coming with own vehicles, automatic parking system is one of the important prototypes that we need. Hence design a IoT based Mobile application of parking system to detect an available parking slot in a parking space. Also do automatic allotting of vehicles.'
        },
        {
          title: 'Smart IOT based Waste Management System',
          objective: 'Develop an IoT Based Smart Waste Management System for Smart City to clear dustbins when filled',
          description: 'In our locality, many times we see that the garbage bins or Dust bins placed at public places in the cities are overflowing due to increase in the waste every day. It creates an unhygienic condition for the people and creates a bad smell around the surroundings that leads to the spread of some deadly diseases & human illness. Design and develop an “IoT Based Waste Management for Smart Cities" which can overcome these problems.'
        }
      ]
    },
    {
      title: 'Smart App',
      imageUrl: 'https://cdn3d.iconscout.com/3d/premium/thumb/mobile-app-developer-4620444-3833104.png',
      problemStatements: [
        {
          title: 'Smart Ecommerce Web App',
          objective: 'Create an Ecommerce Web app using Nextjs for a gift shop',
          description: 'In general, you need to equip your e-commerce gift shop app with a set of features that facilitate the buyer’s journey, deliver a great user experience (UX), and ensure that making a purchase is smooth and easy. All in all, every feature of your shopping app should contribute to its primary goal: increasing gift sales, building customer loyalty, and giving business the competitive advantage it needs to thrive.'
        },
        {
          title: 'Smart Parent -Student Monitoring Mobile App',
          description: 'In general, you need to create a mobile app to ease parents to monitor child performance in training institutes, college, school. The parents can monitor attendance, exam results, assignments and quiz performance of his/her ward directly on the mobile application.'
        }
      ]
    }
  ];
  openThemeDialog(theme: any): void {
    this.dialog.open(ThemeDialogComponent, {
      width: '600px',
      data: theme
    });
  }
}