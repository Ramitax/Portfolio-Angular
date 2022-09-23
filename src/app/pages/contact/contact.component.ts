import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/class/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact?: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contact = this.contactService.getContact();
  }

}
