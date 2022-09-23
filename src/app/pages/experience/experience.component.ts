import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/class/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {

  experiences?: Experience [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experiences = this.experienceService.getExperience();
  }
}
