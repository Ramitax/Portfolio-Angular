import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ComponentsModule } from '../components/components.module';
import { EducationComponent } from './education/education.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProjectComponent } from './project/project.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    EducationComponent,
    ProjectComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ContactComponent,
    EducationComponent,
    ProjectComponent
  ]
})
export class PagesModule { }
