import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import {TutorialesService} from '../tutoriales.service';
import {SeoService} from '../../../services/seo.service';
import {take} from 'rxjs/operators';

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
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.getTutorial(params.url);
      }
    );

  }

  getTutorial(url) {
    this.tutorialesService.getTutorial(url).pipe(take(1)).subscribe(
      tutorial => {
        console.log(tutorial);
        this.tutorialData = tutorial;
        this.title.setTitle(this.tutorialData.title);
        this.seo.generateTags({
          title: this.tutorialData.title,
          description: this.tutorialData.desc,
          image: this.tutorialData.img,
          slug: `tutorial/${url}`
        });
      }
    );
  }

}
