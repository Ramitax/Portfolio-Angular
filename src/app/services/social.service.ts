import { Injectable } from '@angular/core';
import { Social } from '../class/social';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  social: Social = new Social(
    'ramitax.dev@gmail.com',
    'https://www.linkedin.com/in/ramiroambrosetti',
    'https://github.com/Ramitax',
    'https://www.instagram.com/rama_ambrosetti'
  );

  constructor() {}

  getSocial(): Social {
    return this.social;
  }
}
