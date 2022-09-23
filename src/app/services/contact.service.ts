import { Injectable } from '@angular/core';
import { Contact } from '../class/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact: Contact = {
    title: 'Get In Touch',
    description: 'Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!',
    email: 'ramitax.dev@gmail.com'
  };

  constructor() { }

  getContact(): Contact {
    return this.contact;
  }
}
