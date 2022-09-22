import { Component, OnInit } from '@angular/core';
import { Presentation } from 'src/app/class/presentation';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  presentation?: Presentation;

  constructor(private presentationService : PresentationService) { }

  ngOnInit(): void {
    this.presentation = this.presentationService.getPresentation();
  }

}
