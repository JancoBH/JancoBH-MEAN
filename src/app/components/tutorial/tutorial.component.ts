import { Component, OnInit } from '@angular/core';
import {TutorialesService} from './tutoriales.service';
import {take} from 'rxjs/operators';

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
    this.tutorialesService.getTutoriales().pipe(take(1)).subscribe(
      res => {
        this.tutorials = res;
      }
    );
  }

}
