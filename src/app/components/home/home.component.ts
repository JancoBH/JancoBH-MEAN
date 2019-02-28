import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {take} from 'rxjs/operators';
import {TutorialesService} from '../tutorial/tutoriales.service';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  tutorials = [];

  techList = [
    {title: 'Angular', img: 'assets/img/angular.svg'},
    {title: 'Vue', img: 'assets/img/Vue.png'},
    {title: 'Firebase', img: 'assets/img/firebase.svg'},
    {title: 'JavaScript', img: 'assets/img/js.svg'},
    {title: 'PWA', img: 'assets/img/pwa.svg'},
    {title: 'Material Design', img: 'assets/img/material.svg'},
    {title: 'Flutter', img: 'assets/img/Flutter.png'},
    {title: 'Redux', img: 'assets/img/Redux.svg'}
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
    private seo: SeoService,
    private tutorialesService: TutorialesService
  ) {
  }

  ngOnInit() {
    this.title.setTitle('JancoBH');
    this.seo.generateTags({
      title: 'JancoBH',
      description: 'Web JancoBH',
      image: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/general%2Ffreebay.png?alt=media&token=75bf00ca-41ad-42ce-8b8b-69a7c0420113',
      slug: ``
    });

    this.tutorialesService.getTutoriales().pipe(take(1)).subscribe(
      res => {
        this.tutorials = res;
      }
    );

  }

}
