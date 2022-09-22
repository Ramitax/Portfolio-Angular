import { Injectable } from '@angular/core';
import { About } from '../class/about';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  about: About = new About(
    'Hello! My name is Ramiro and I enjoy creating things that live on the internet. My interest in programing started back in 2015 when I decided to try create my own video game — turns out that it was not as easy as I imagined, with a lot of effort I learned the basics of programming and after',
    'software consulting',
    'https://ar.nttdata.com/',
    'fintech',
    'https://vantek.co/',
    'I consider myself developer who has a strong focus on technical growth. I like discussing topics such as performance, efficiency, clean code and best practices. I would love to work on projects where I can get the best out of the latest technologies in the Spring & Angular ecosystem.',
    ['Java', 'Spring', 'PostgreSQL', 'SQL Server'],
    ['Javascript', 'Typescript', 'Angular', 'Ionic'],
    ['Git', 'Github', 'Scrum', 'Jira']
  );

  constructor() {}

  getAbout(): About {
    return this.about;
  }
}
