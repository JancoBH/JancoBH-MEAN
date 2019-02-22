import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import {SeoService} from '../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  data = {
    name: 'Michael Jordan',
    bio: 'Former baseball player',
    image: 'https://goo.gl/hfvwfq'
  };

  constructor(private title: Title, private meta: Meta, private seo: SeoService) {}

  ngOnInit() {

    this.title.setTitle('Haz un CRUD con Angular y Firebase');

    this.seo.generateTags({
      title: 'Haz un CRUD con Angular y Firebase',
      description: 'Aprende a realizar un CRUD con Angular y Firebase Hosting ',
      image: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/tutorials%2Fcrud-angular-firebase.jpg?alt=media&token=d2dbaacb-63a3-4668-9f59-8ae69402a45a',
      slug: `about`
    });

    // this.meta.addTags([
    //   { name: 'twitter:card', content: 'summary' },
    //   { name: 'og:url', content: '/about' },
    //   { name: 'og:title', content: this.data.name },
    //   { name: 'og:description', content: this.data.bio },
    //   { name: 'og:image', content: this.data.image }
    // ]);
  }
}
