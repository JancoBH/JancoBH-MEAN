import { Component, OnInit } from '@angular/core';
import {TutorialesService} from './tutoriales.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  tutorials: any[];

  constructor(
    private tutorialesService: TutorialesService
  ) {}

  ngOnInit() {
    this.tutorialesService
      .getTutoriales()
      .then((tutoriales: any[]) => {
        this.tutorials = tutoriales.map((tutorial) => {
          return tutorial;
        });
      });
  }

}
