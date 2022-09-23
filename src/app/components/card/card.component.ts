import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/class/project';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() project?: Project;

  constructor() {}

  ngOnInit(): void {}
}
