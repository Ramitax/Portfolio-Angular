import { Component, Input } from '@angular/core';
import { Education } from '../../class/education';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  panelOpenState = false;

  @Input() item? : Education;

}
