import {SharedModule} from '../../shared/shared.module';
import {NgModule} from '@angular/core';
import {TutorialComponent} from './tutorial.component';
import {TutorialRoutesModule} from './tutorial-routes.module';
import {TutorialDetailComponent} from './tutorial-detail/tutorial-detail.component';
import {DisqusModule} from 'ngx-disqus';

@NgModule({
  imports: [
    SharedModule,
    TutorialRoutesModule,
    DisqusModule.forRoot('jancobh')
  ],
  declarations: [
    TutorialComponent,
    TutorialDetailComponent
  ],
  providers: [
  ]
})

export class TutorialModule {}
