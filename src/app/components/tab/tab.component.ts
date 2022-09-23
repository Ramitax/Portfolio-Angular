import { Component, Input, OnInit } from '@angular/core';
import { Experience } from 'src/app/class/experience';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  @Input() experiences?: Experience [];

  constructor() { }

  ngOnInit(): void {
  }

}
