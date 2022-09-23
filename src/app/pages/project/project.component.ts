import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/class/project';
import { ProjectTsService } from 'src/app/services/project.ts.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects?: Project[];

  constructor(private projectService: ProjectTsService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
