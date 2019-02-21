import {SharedModule} from '../../shared/shared.module';
import {NgModule} from '@angular/core';
import {TutorialComponent} from './tutorial.component';
import {TutorialRoutesModule} from './tutorial-routes.module';
import {TutorialDetailComponent} from './tutorial-detail/tutorial-detail.component';

@NgModule({
  imports: [
    SharedModule,
    TutorialRoutesModule
  ],
  declarations: [
    TutorialComponent,
    TutorialDetailComponent
  ],
  providers: [
  ]
})

export class TutorialModule {}
