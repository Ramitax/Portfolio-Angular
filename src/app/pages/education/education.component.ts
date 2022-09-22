import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from '../../class/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  university?: Education[];
  bootcamp?: Education[];
  courses?: Education[];

  constructor( private educationService : EducationService ) {}

  ngOnInit(): void {
    this.university = this.educationService.getUniversity();
    this.bootcamp = this.educationService.getBootcamp();
    this.courses = this.educationService.getCourses();
  }
}
