import { Injectable } from '@angular/core';
import { Education } from '../class/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {

  university: Education[] = [
    new Education(
      'Bachelor of System',
      'https://unahur.edu.ar/licenciatura-informatica/',
      '@Unahur',
      '2021 - Current',
      ['Grade point average 8.0/10']
    ),
    new Education(
      'Systems Engineer',
      'https://untref.edu.ar/carrera/ingenieria-en-computacion',
      '@Untref',
      '2019 - Current',
      [
        'Manuel Belgrano scholarship for my performance',
        'Grade point average 8.7/10',
      ]
    ),
  ];

  bootcamp: Education[] = [
    new Education(
      'Java Talent Camp',
      'https://utn.edu.ar/es/',
      '@Utn',
      '2021',
      ['Java, Spring, Hibernate & Microservices']
    ),
  ];

  courses: Education[] = [
    new Education(
      'Ionic',
      'https://www.udemy.com/course/ionic-ios-android-pwa-appstore-playstore-push/',
      '@Udemy',
      '2022',
      ['Create applications IOS, Android y PWAs with Angular']
    ),
    new Education(
      'SR and Clean Code',
      'https://www.udemy.com/course/solid-clean/',
      '@Udemy',
      '2022',
      ['Fundamentals of software architecture and development']
    ),
    new Education(
      'Microservices',
      'https://www.udemy.com/course/microservicios-con-spring-boot-y-spring-cloud/',
      '@Udemy',
      '2021',
      ['Microservices with Spring Boot and Spring Cloud']
    ),
    new Education(
      'Angular',
      'https://www.udemy.com/course/angular-fernando-herrera/',
      '@Udemy',
      '2021',
      ['Create web applications with Angular']
    ),
    new Education(
      'Java',
      'https://www.udemy.com/course/aprende-programacion-en-java-desde-cero/',
      '@Udemy',
      '2020',
      [
        'Fundamentals of object oriented programming, programming and data bases',
      ]
    ),
  ];

  constructor() {}

  getUniversity(): Education[] {
    return this.university;
  }

  getBootcamp(): Education[] {
    return this.bootcamp;
  }

  getCourses(): Education[] {
    return this.courses;
  }
}
