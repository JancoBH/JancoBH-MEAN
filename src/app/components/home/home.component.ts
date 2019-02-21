import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutorials: Observable<any[]>;

  techList = [
    {title: 'Angular', img: 'assets/img/angular.svg'},
    {title: 'Firebase', img: 'assets/img/firebase.svg'},
    {title: 'JavaScript', img: 'assets/img/js.svg'},
    {title: 'Redux', img: 'assets/img/Redux.svg'},
    {title: 'Material Design', img: 'assets/img/material.svg'},
    {title: 'Angular Universal', img: 'assets/img/universal.svg'},
    {title: 'PWA', img: 'assets/img/pwa.svg'},
    {title: 'RxJS', img: 'assets/img/rxjs.png'}
  ];

  blog = [
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'}
  ];

  constructor(
    private title: Title,
    private meta: Meta
  ) {
  }

  ngOnInit() {
    // this.title.setTitle('');
    // this.meta.addTags([
    //   { name: 'twitter:card', content: 'summary' },
    //   { name: 'og:url', content: '/about' },
    //   { name: 'og:title', content: '' },
    //   { name: 'og:description', content: '' },
    //   { name: 'og:image', content: '' }
    // ]);
  }

}
