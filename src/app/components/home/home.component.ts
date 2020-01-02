import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {take} from 'rxjs/operators';
import {TutorialesService} from '../tutorial/tutoriales.service';
import {SeoService} from '../../services/seo.service';
import Typed from 'typed.js';

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
    {title: 'React', img: 'assets/img/react.png'},
    {title: 'JavaScript', img: 'assets/img/js.svg'},
    {title: 'NodeJS', img: 'assets/img/nodejs.svg'},
    {title: 'Firebase', img: 'assets/img/firebase.svg'},
    {title: 'Flutter', img: 'assets/img/Flutter.png'},
    {title: 'PWA', img: 'assets/img/pwa.svg'}
  ];

  blog = [
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
    {title: 'Próximamente', img: 'https://firebasestorage.googleapis.com/v0/b/jancobh-2.appspot.com/o/proximamente.jpg?alt=media&token=9f56b23c-8c25-41c9-812d-1c4790451312'},
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

    const options = {
      strings: [
        '<i class="mascota">Angular</i>',
        '<i class="mascota">React</i>',
        '<i class="mascota">Vue</i>',
        '<i class="mascota">Javascript</i>',
        '<i class="mascota">Front-end</i>',
      ],
      stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato
    };

    const typed = new Typed('.typed', options);

  }

}
