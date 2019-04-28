import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'JancoBH-MEAN';

  private isBrowser: boolean = isPlatformBrowser(this.platformId);

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      if (this.isBrowser) {
        window.scrollTo(0, 0);
      }
    });
  }

}
