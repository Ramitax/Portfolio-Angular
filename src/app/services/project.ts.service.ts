import { Injectable } from '@angular/core';
import { Project } from '../class/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectTsService {

  projects: Project [] = [
    new Project(
      'Fifa World Cup Qatar 2022',
      '2022',
      'https://github.com/Ramitax/QatarApp-Angular/tree/main/QatarApp',
      'Fixture animated for World Cup',
      'Angular, Typescript, Material, HTML, SCSS, Bootstrap and JSON'
    ),
    new Project(
      'Porfolio',
      '2022',
      'https://github.com/Ramitax/Portfolio-Angular',
      'Modularized portfolio, created by json files, allows you to customize to your liking',
      'Angular, Typescript, Material, HTML, SCSS, Bootstrap and JSON'
    ),
    new Project(
      'TODO list',
      '2022',
      'https://github.com/Ramitax/TODO-Ionic',
      'TODO list with CRUD',
      'Ionic, Typescript, HTML, CSS and Bootstrap'
    ),
    new Project(
      'How much is in pesos?',
      '2022',
      'https://github.com/Ramitax/Cuantos_es_en_pesos-React',
      'Calculate the conversion from Argentine coin, to the different dollar exchange rates',
      'React, Javascript, HTML, CSS, Bootstrap and JSON'
    ),
    new Project(
      'Seeds in the wind',
      '2021',
      'https://github.com/Ramitax/Semillas-Java.TDD',
      'Following the controversy over the possibility of modifying the Seeds and Phytogenetic Creations Law, No. 20.247, create an application to better measure the performance of your orchards.',
      'Java, TDD, JUnit, JSON'
    ),
    new Project(
      'COVID Analitycs',
      '2020',
      'https://github.com/Ramitax/COVID.Analitycs-Java',
      'Analyzes an xlsx provided by the Argentine State, forming statistics in n . log (n) (Big O notation)',
      'Python, HTML, CSS, Bootstrap and JSON'
    ),
  ];

  constructor() { }

  getProjects(): Project[] {
    return this.projects;
  }
}
