import { Injectable } from '@angular/core';
import { Experience } from '../class/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experience: Experience[] = [
    new Experience(
      'Vantek',
      'Full-Stack Developer',
      'https://vantek.co/',
      'March 2022 - Current',
      'For projects OMS, DMA, DMA Mobile for',
      'BYMA',
      'https://www.byma.com.ar/',
      [
        'Reduced by 30% csv file processing time by a new recursive algorithm.',
        'Created and updated mobile applications (Android and iOS), improved usability by implementing new requirements.',
        'Reduced by 30% the number of bugs by analysis and reimplementation of old code.',
      ],
      'Java, Spring, Angular, Ionic, and PostgreSQL.'
    ),
    new Experience(
      'NTT Data',
      'Full-Stack Developer',
      'https://www.nttdata.com/global',
      'March 2021 - March 2022',
      'For a project of',
      'La Caja Seguros',
      'https://seguros.lacaja.com.ar/',
      [
        "Implemented Middleware to connect the different client's systems, improving the scalability and availability by using microservices.",
        "Reduced by 10% the webpage's response time by moderated service calls.",
        'Reduced by 30% environment arming time by updating the documentation.',
      ],
      'Java, Spring, Angular, and SQL Server.'
    ),
  ];

  constructor() {}

  getExperience(): Experience[] {
    return this.experience;
  }
}
