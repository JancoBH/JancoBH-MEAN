import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import {TutorialesService} from '../tutoriales.service';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.scss']
})
export class TutorialDetailComponent implements OnInit {

  tutorialData: any;

  constructor(
    private tutorialesService: TutorialesService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.tutorialesService
          .getTutorial(params.id)
          .then((tutorial: any[]) => {
            this.tutorialData = tutorial;
            this.title.setTitle(this.tutorialData.title);
            this.meta.addTags([
              { name: 'twitter:card', content: 'summary' },
              { name: 'og:url', content: `/tutorial/${this.tutorialData.id}` },
              { name: 'og:title', content: this.tutorialData.title },
              { name: 'og:description', content: this.tutorialData.desc },
              { name: 'og:image', content: this.tutorialData.img }
            ]);
          });
      }
    );

  }

}
