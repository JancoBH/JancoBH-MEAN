import {ChangeDetectorRef, Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {isPlatformBrowser} from '@angular/common';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  mobileQuery: MediaQueryList;
  title = 'JancoBH-MEAN';

  private isBrowser: boolean = isPlatformBrowser(this.platformId);
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

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
