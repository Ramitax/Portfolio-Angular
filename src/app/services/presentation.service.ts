import { Injectable } from '@angular/core';
import { Presentation } from '../class/presentation';

@Injectable({
  providedIn: 'root',
})
export class PresentationService {
  constructor() {}

  presentation: Presentation = new Presentation(
    'Ramiro Ambrosetti',
    'Full Stack Developer',
    'software developer',
    '2 years',
    'developing web applications using Spring, Java, Angular and REST Service with a focus on developing scalable and well-documented code. Aiming to contribute to building software solutions along with highly performant and dynamic teams. I consider myself a technology and learning enthusiast who loves solving problems with programming'
  );

  getPresentation(): Presentation {
    return this.presentation;
  }
}
