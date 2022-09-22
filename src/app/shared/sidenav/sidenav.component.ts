import { Component, Input, OnInit } from '@angular/core';
import { Social } from 'src/app/class/social';
import { SocialService } from 'src/app/services/social.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SideNavComponent implements OnInit {

  @Input() left?: boolean;
  social?: Social;

  constructor(private socialService: SocialService) {}

  ngOnInit(): void {
    this.social = this.socialService.getSocial();
  }
}
