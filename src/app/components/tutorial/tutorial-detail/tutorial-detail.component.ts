import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit {

  tutorialData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        console.log(params);
      }
    );

  }

}
