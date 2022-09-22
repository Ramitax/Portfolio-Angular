import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/class/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  year = new Date().getFullYear();
  about?: About;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.about = this.aboutService.getAbout();
  }

}
